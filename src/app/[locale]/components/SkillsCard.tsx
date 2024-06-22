interface Props {
  title: string
  languages: string
}

export const SkillsCard = (props: Props) => {
  const { title, languages } = props

  return (
    <div>
      <div className='border border-b-0 border-solid border-borderColor'>
        <p className='p-3 text-fontColorTitles-light dark:text-fontColorTitles-dark font-semibold'>
          {title}
        </p>
      </div>
      <div className='border border-solid border-borderColor'>
        <div className='p-2 flex flex-col justify-between'>
          <p className='text-fontColor-light dark:text-fontColor-dark'>
            {languages}
          </p>
        </div>
      </div>
    </div>
  )
}
