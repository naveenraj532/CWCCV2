const Button = ({label}) => {
  return (
    <button className='mb-8 flex mt-5 justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg lead-none bg-blue rounded-lg text-white'>
     {label}
    </button>
  )
}

export default Button