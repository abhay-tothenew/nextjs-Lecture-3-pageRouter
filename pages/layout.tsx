import Head from "next/head";

interface LayoutProps{
    children:React.ReactNode;
    title?:string;
}
export default function Layout({children,title='Products App'}:LayoutProps){
    return(
        <>
        <Head>
          <title>{title}</title>
          <meta name="description" content="Products catalog" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          {children}
        </main>
      </>
    )
}