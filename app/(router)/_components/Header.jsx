import { Button } from '@/components/ui/button'
import { BellDot, Search } from 'lucide-react'

const Header = () => {
  return (
    <div className="p-4 bg-white flex justify-between">
      <div className="flex gap-2 border rounded-md p-2">
        <Search className="w-5 h-5" />
        <input type="text" placeholder="Search" className="outline-none" />
      </div>
      <div className="flex items-center gap-4">
        <BellDot className="text-gray-500" />
        <Button>Get Started</Button>
      </div>
    </div>
  )
}

export default Header