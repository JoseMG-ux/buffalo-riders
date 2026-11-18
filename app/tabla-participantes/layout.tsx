export default function RidersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10 border'>
    //   <div className='inline-block w-full max-w-3xl text-center justify-center border'>
    //     {children}
    //   </div>
    // </section>

    <section className='flex flex-col items-center gap-4 py-8 md:py-10'>
      <div className='w-full max-w-4xl text-center'>{children}</div>
    </section>
  );
}
