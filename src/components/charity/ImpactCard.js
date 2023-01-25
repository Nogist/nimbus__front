export const ImpactCard = ({ text, icon=""}) => {
    return(
        <li className={`${ icon && "flex"} items-center text-white py-3 list-disc`}>
            {icon && <i className='pr-4 lg:pr-5 text-3xl sm:text-4xl'>{icon}</i>}
            {text}
        </li>
    )
}