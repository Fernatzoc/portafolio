interface Props {
  title: string
  languages: string
}

export const SkillsCard = (props: Props) => {
  const { title, languages } = props

  return (
    <div>
      <div className='border border-b-0 border-solid border-borderColor'>
        <p className='p-3 text-fontColorTitles font-semibold'>{title}</p>
      </div>
      <div className='border border-solid border-borderColor'>
        <div className='p-2 flex flex-col justify-between'>
          <p>{languages}</p>
        </div>
      </div>
    </div>
  )
}
