import { ReactNode } from "react"
import SideNav from "@/app/ui/dashboard/sidenav"

type Props = {children : ReactNode}
const DashboardLayout = ({children}: Props) => {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            {/* don't shrink in small screens, flex:none === 0 0 auto */}
            <div className="w-full flex-none md:w-64"> 
            <SideNav/>
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children }</div>
      </div>
  )
}
export default DashboardLayout