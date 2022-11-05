import React from 'react'
import linksData from './LinksData'
import Github_logo from '../images/Github_logo.svg'
import Slack_logo from '../images/Slack_logo.svg'

function Links() {
    const eachLink = linksData.map( data => {
        return  <a href={data.url} id={data.id} key={data.id} className="btn__link" target="_blank">
                    {data.title}
                </a>
    })

    return (
        <main className="d-grid gap-3 pt-2">
            {eachLink}
            <div className="social__icons text-center p-4 mb-5">
                <img src={Slack_logo} alt='Slack' className='px-3'/>
                <img src={Github_logo} alt='Github' className='px-3'/>
            </div>
        </main>
    )
}

export default Links