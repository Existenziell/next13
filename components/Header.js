import SmartLink from "./SmartLink"

export default function Header({ link, text }) {
  return (
    <div className='mb-8 text-lg'>
      Test fetching data from{` `}
      <SmartLink href={link} external={true} classes='border-b border-dotted border-brand-dark'>
        {text}
      </SmartLink>
    </div>
  )
}
