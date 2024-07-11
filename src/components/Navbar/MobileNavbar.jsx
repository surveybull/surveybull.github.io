import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "../../@/components/ui/sheet"
  import SurveybullLogo from '../../../public/SurveybullLogo.svg'
  import { FiMenu } from "react-icons/fi";
function MobileNavbar() {
  return (
    <div className='flex items-center justify-between'>
       <div>
        <img src={SurveybullLogo} width={170} height={170}></img>
       </div>
       <Sheet>
  <SheetTrigger><FiMenu/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
       </div>

  )
}

export default MobileNavbar;