import React, { JSX, useEffect } from "react";

import { Outlet } from "react-router-dom";
import { AppHeader } from "../../infrastructure/shared/appheader/AppHeader";

export const Layout: React.FC<{}> = (): JSX.Element => {
    // const [IsOpened, setIsOpened] = useState(false);
    // const [UserDetails, setUserDetails] = useState<TUser>({} as TUser);

    useEffect(() => {
        //get user details
        //setUserDetails({} as TUser);
    }, []);

    return <>
        <AppHeader />
        <div className="main-container">
            <Outlet />
        </div>
    </>
}