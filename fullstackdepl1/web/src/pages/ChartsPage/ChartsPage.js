import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ChartsPage = () => {
  return (
    <>
      <MetaTags title="Charts" description="Charts page" />

      <h1>ChartsPage</h1>
      <p>
        Find me in <code>./web/src/pages/ChartsPage/ChartsPage.js</code>
      </p>
      <p>
        My default route is named <code>charts</code>, link to me with `
        <Link to={routes.charts()}>Charts</Link>`
      </p>

      <div className='flex flex-col items-center'>
        <p className='bg-green-600 w-1/2 text-center'>Here will the chart magic happen</p>
        <div className=' flex items-center justify-center w-60 h-60 bg-black text-red-500'>
          Chart
        </div>


      </div>
    </>
  )
}

export default ChartsPage
