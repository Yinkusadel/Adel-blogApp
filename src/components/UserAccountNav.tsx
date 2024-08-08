
import { User } from "next-auth";
import { UserAvatar } from "./UserAvatar";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/DropDownMenu";



interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
    user: Pick<User, 'name' | 'image' | 'email'>
  }

export function UserAccountNav({ user }: UserAccountNavProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar
                    user={{ name: user.name || null, image: user.image || null }}
                    className='h-8 w-8'
                />
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}