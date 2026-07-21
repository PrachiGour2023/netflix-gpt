import { useState } from "react";
import { Menu, MenuItem, ProductItem } from "../../../components/ui/navbar-menu";
import { cn } from "../../../utils/utils";
import { useSelector } from "react-redux";
import type { RootState } from '../../../redux/store';
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../../../utils/firebase";

export function Header({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();
    const handleLogout = () => {
        signOut(auth).then(() => { }).catch((error) => {
            navigate("/error", { state: { error } })
        });
    }

    return (
        <div
            className={cn("inset-x-0 top-0 z-50 mx-auto", className)}
        >
            <Menu setActive={setActive}>
                <Menu setActive={setActive}>
                    <MenuItem setActive={setActive} active={active} item="Services" />
                    <MenuItem setActive={setActive} active={active} item="Products" />
                    <MenuItem setActive={setActive} active={active} item="Pricing">
                    </MenuItem>
                </Menu>
                <div>
                    <ProductItem
                        title={user?.displayName ?? "User"}
                        action={handleLogout}
                        src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
                        description="Sign Out"
                    />
                </div>
            </Menu>
        </div>
    );
}
