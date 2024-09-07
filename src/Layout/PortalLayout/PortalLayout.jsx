import React from 'react'
import SidePanel from '../SidePanel/SidePanel'
import TopBar from '../Topbar/TopBar'


const PortalLayout = ({ children }) => {
    return (
        <div className=' bg-[#F5F4FE] '>
            <div className=' flex flex-row '>
                <div>
                    <SidePanel />
                </div>
                <div className=' w-full'>
                    <div className='mb-10  '><TopBar /> </div>
                    <div className=' px-8'> <main> {children} </main></div>
                </div>
            </div>

        </div>
    )
}

export default PortalLayout 