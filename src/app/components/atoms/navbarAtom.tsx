import { AuthRoutes } from '@/app/services/msalConfig';
import { AuthenticatedTemplate, useMsal } from '@azure/msal-react'
import Link from 'next/link'
import React from 'react'

export const NavbarAtom = () => {
    const { instance, accounts } = useMsal();
    const Logout = async () => {
        sessionStorage.clear();
        accounts.forEach(async (account) => {
            await instance.logout({
                account,
                postLogoutRedirectUri: AuthRoutes.logout,
            });
        });
    };
    const links = [
        { href: '/', children: 'Home' },
        { href: '/hangman', children: 'Hangman' },
        { href: '/game', children: 'Chat' },
    ]
    return (<nav className='w-full bg-teal-950 text-white flex flex-nowrap gap-6 px-12'>
        <h1 className='text-3xl'>Hangman</h1> <div className='flex-grow' />

        <div className='flex flex-nowrap gap-6 w-[550px]'>
            {links.map((props) => <Link key={props.href} className='btnA px-4 py-3 bg-slate-900/40 border border-white text-white! text-center hover:bg-slate-500/50' {...props} />)}
            <div className='flex-grow' />
            <AuthenticatedTemplate>
                <button className='px-4 py-3 bg-slate-900/40 border text-center border-white text-white' onClick={Logout}>Logout</button>
            </AuthenticatedTemplate>
        </div>
        {/* </AuthenticatedTemplate> */}
    </nav>
    )
}
