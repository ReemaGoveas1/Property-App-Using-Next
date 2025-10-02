"use client";
import React from "react";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";

const Property = () => {
  const router = useRouter();
  const searchParam = useSearchParams();
  const pathName = usePathname();
  const { id } = useParams();
  const name = searchParam.get("name");

  return (
    <div>
      <button onClick={() => router.push("/")} className="bg-blue-500 p-2">
        Go home {pathName}
      </button>
      <h4>Property</h4>
    </div>
  );
};

export default Property;
