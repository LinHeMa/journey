import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 flex justify-between shadow-md p-4">
      <section className="flex grow">
        <Link href="/">林荷馬</Link>
      </section>
      <section className="flex space-x-4">
        <Link href="/">文章</Link>
        <Link href="/">作品</Link>
        <Link href="/">關於</Link>
      </section>
    </div>
  );
};

export default Header;
