import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Users() {
    const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <h2>{searchParams.get("id")}</h2>
      <h2>{searchParams.get("name")}</h2>
    </div>
  );
}
