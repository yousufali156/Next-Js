import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const dummyUserData ={
        role: "user",
        email: "test@admin.com"
    
    }
    
    let isServicesPage = request.nextUrl.pathname.includes("/services")
    let isAdmin = dummyUserData.role == 'admin'

    if (isServicesPage && !isAdmin)
        return NextResponse.rewrite(new URL('/login',request.url))
  return NextResponse.next()
}
 

