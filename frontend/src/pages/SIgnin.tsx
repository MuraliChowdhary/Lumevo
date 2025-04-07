import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"

interface SigninProps {
  setIsAuthenticated?: (value: boolean) => void;
}

export const Signin = ({ setIsAuthenticated }: SigninProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type="signin" setIsAuthenticated={setIsAuthenticated} />
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  )
}