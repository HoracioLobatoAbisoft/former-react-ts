import React from 'react'
import imgUserEdit from "../../../assets/img/user-edit.svg";
import SideBarPersonalArea from '../../common/SideBarPersonalArea/SideBarPersonalArea';

const ProfileContent = () => {
  return (
    <div className="flex overflow-y-scroll">
       <SideBarPersonalArea />

      <div className="p-4 overflow-y-scroll w-full mt-10 ml-10">
        <div className="flex items-center mb-4">
          <img className="h-8 w-8 mr-4" src={imgUserEdit} alt="" />
          <h2 className="text-[#f58220] font-semibold">AGGIORNA DATI FISCALI</h2>
        </div>
        
        
      </div>
    </div>
  )
}

export default ProfileContent