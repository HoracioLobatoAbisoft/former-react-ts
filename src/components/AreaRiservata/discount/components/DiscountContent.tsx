import React,{useState} from 'react'
import icona1 from "../../../../assets/iconsLast/iconoProfilo.png";
import imgDiscontoWhite from "../../../../assets/img/coupon-white.png"
import SideBarPersonalArea from '../../../common/SideBarPersonalArea/SideBarPersonalArea'
import DiscountComponent from './DiscountComponent';
import DiscountExplication from './DiscountExplication';

const DiscountContent = () => {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  return (
    <div className="flex ">
      <SideBarPersonalArea />

      <div className=" overflow-x-scroll w-full">
          <div className="p-4">
            <div className="flex items-center mb-4 bg-[#f58220] rounded-md px-4 py-1 w-[400px] mt-10">
              <img className="h-8 w-8 mr-4" src={imgDiscontoWhite} alt="" />
              <h2 className="text-white font-semibold">I TUOI COUPON DI SCONTO</h2>
            </div>

            <div className="flex flex-col relative w-full border border-[#f58220] rounded-sm">
              <div className="flex">
                <button
                  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(1)}
                >
                  I tuoi Coupon di Sconto
                </button>
                <button
                  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(2)}
                >
                  Come funzionano i Coupon?
                </button>
              </div>

              <div className="content-tabs h-auto">
                <div
                  className={
                    toggleState === 1 ? "content  active-content" : "content"
                  }
                >
                  
                  <div className="">
                   <DiscountComponent />
                  </div>
                </div>

                <div
                  className={
                    toggleState === 2 ? "content  active-content" : "content"
                  }
                >
                  <DiscountExplication />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DiscountContent