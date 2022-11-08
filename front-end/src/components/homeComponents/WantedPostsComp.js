import React, {useContext} from 'react'
import SingleCard from './SingleCard'
import MainContext from '../../context/MainContext'

const WantedPosts = () => {

  const { wantedPosts} = useContext((MainContext))

  return (
    <div>
        <div className={wantedPosts.length > 0 ? 'display_none' : 'userProfileSpan '}>Pagal paieskos fraze postu nerasta</div>
        <div>
        {wantedPosts && wantedPosts.map((e, i) =>  <SingleCard post={e} key={i} />)
        }

        </div>
    </div>
  )
}

export default WantedPosts