import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenu,
} from '@/components/ui/dropdown-menu';
import { CodeXml, Share2 } from 'lucide-react';

export default function Navbar() {
  return (
    <header className='flex h-full items-center justify-between bg-white px-4 shadow dark:bg-gray-950 md:px-6'>
      <Link className='flex items-center gap-2' href='/'>
        <CodeXml className='h-6 w-6' />
        <span className='sr-only'>Playground</span>
      </Link>
      <h1 className='text-lg font-medium md:text-xl'>Playground ID</h1>
      <div className='flex items-center gap-4'>
        <Button className='rounded-full' size='icon' variant='ghost'>
          <Share2 className='h-5 w-5' />
          <span className='sr-only'>Share</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className='h-9 w-9'>
              <AvatarImage alt='profile' src='/placeholder-avatar.jpg' />
              <AvatarFallback>SS</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
