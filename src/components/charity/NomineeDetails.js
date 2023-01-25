import React, { useContext, useEffect, useRef, useState } from "react";
import { AidProjectContext } from "../../context/AidProjectContext";
import Overlay from "../customComponents/Overlay";
import Loader from "react-spinners/BeatLoader";
import { useRouter } from "next/router";
import { ExportToCsv } from "export-to-csv";
import Pagination from "../../components/customComponents/Pagination";

function NomineeDetails() {
  const [currentNomination, setCurrentNomination] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = currentNomination.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const totalPosts = currentNomination.length;

  const {
    getNomineeDetails,
    nominee_Details,
    isLoading,
    token,
    setNomineeDetail,
  } = useContext(AidProjectContext);
  const router = useRouter();
  const nomineeRef = useRef(null)

  const handleDetail = (id) => {
    router.push("/admin/nominee-details/" + id);
  };

  const generateExcelFile = (e) => {
    e.preventDefault();

    const data = nominee_Details.map((data) => ({
      "Key Person1": `${
        data?.keyPeople[0]?.name ? data?.keyPeople[0]?.name : ""
      } (${data?.keyPeople[0]?.email ? data?.keyPeople[0]?.email : ""}, ${
        data?.keyPeople[0]?.phone ? data?.keyPeople[0]?.phone : ""
      })`,
      "Key Person2": `${
        data?.keyPeople[1]?.name ? data?.keyPeople[1]?.name : ""
      } (${data?.keyPeople[1]?.email ? data?.keyPeople[1]?.email : ""}, ${
        data?.keyPeople[1]?.phone ? data?.keyPeople[1]?.phone : ""
      })`,
      ...data,
    }));
    const datawithoutKeyPeople = data.map(({ keyPeople, ...rest }) => {
      return rest;
    });
    const newData = datawithoutKeyPeople.map((data, index) => {
      return {
        SN: index + 1,
        OrgName: data.orgName,
        Address: data.address,
        "No. of Employees": data.noOfEmployee,
        "Annual Marketing Spend": data.annualMarketing,
        "Annual Business Turnover": data.annualTurnover,
        Category: data.category,
        "Years of Operation": data.yearsOfOp,
        "Is Org Registered": data.isOrgRegistered,
        "About Org": data.aboutOrg,
        "Why Merit": data.whyMerit,
        "How Impact Business": data.howImpactBusiness,
        "Social Handles": `(Facebook: ${data.facebook}, LinkedIn: ${data.linkedIn}, Instagram: ${data.instagram})`,
        Website: data.website,
        "Key Persson1": data["Key Person1"],
        "Key Persson2": data["Key Person2"],
        "How did you hear about this project": data.source,
        updatedAt: data.updatedAt,
        createdAt: data.createdAt,
      };
    });

    const options = {
      fieldSeparator: ",",
      quoteStrings: '"',
      decimalSeparator: ".",
      showLabels: true,
      showTitle: true,
      title: "Nominee Details",
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      // headers: ['Column 1', 'Column 2', etc...]
    };
    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(newData);
  };

  const handleSetPage = (number) => {
    setCurrentPage(number);
    nomineeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    setCurrentNomination(nominee_Details);
  }, [nominee_Details]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    const tempToken = window.localStorage.getItem("nm-token");
    getNomineeDetails(tempToken);
  }, []);
  return (
    <div className="w-full bg-background-logo bg-no-repeat bg-contain bg-top pt-10" ref={nomineeRef}>
      <div className="xl:w-85 w-90 mx-auto">
        <h1 className="font-black md:py-5 py-3 text-brand-color1 md:text-4xl text-2xl opacity-80">
          Nominee Details
        </h1>
        <div className="w-full pt-4 pb-5">
          {isLoading ? (
            <Overlay position="fixed" zIndex="z-120">
              <Loader size={25} color="#4286FF" />
            </Overlay>
          ) : currentPosts.length !== 0 ? (
            <div className="w-full text-brand-color1">
              <div className="w-full flex justify-end items-center">
                <button
                  type="button"
                  className="text-white bg-primary2 border border-primary2 rounded-md px-3 py-3 cursor-pointer hover:bg-white hover:text-primary2"
                  onClick={generateExcelFile}
                >
                  Export To Excel
                </button>
              </div>
              <table className="w-full mt-4">
                <tr className="w-full py-1 bg-charity-color6 border-0 text-left">
                  <th className="opacity-80 font-bold py-1 pr-5">S/N</th>
                  <th className="opacity-80 font-bold py-1">Name</th>
                  <th className="opacity-80 font-bold py-1">Category</th>
                  <th className="opacity-80 font-bold py-1">
                    Is Org. Registered
                  </th>
                  <th className="opacity-80 font-bold py-1">
                    No. of Employees
                  </th>
                </tr>
                {currentPosts.map((data, index) => {
                  return (
                    <tr
                      className="hover:shadow-lg hover:bg-white cursor-pointer"
                      onClick={handleDetail.bind(null, data._id)}
                    >
                      <td className=" py-4 pl-3">{data.index}</td>
                      <td className="py-4 pr-1">{data.orgName}</td>
                      <td className="py-4">{data.category}</td>
                      <td className="py-4">
                        {data.isOrgRegistered === "true" ? "Yes" : "No"}
                      </td>
                      <td className="py-4">{data.noOfEmployee}</td>
                    </tr>
                  );
                })}
              </table>
              {/* <div className="flex justify-center items-center mx-auto w-4/5 py-16">
                <Pagination
                  numOfPosts={totalPosts}
                  handleSetPage={handleSetPage}
                  handleSetCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  postPerPage={postPerPage}
                  ref={nomineeRef}
                />
              </div> */}
            </div>
          ) : (
            <div className="py-20">
              <p className="text-center text-brand-color1 font-bold text-2xl">
                Empty
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NomineeDetails;
