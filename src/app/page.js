'use client'
import Banner from "@/components/Banner";
import FriendsList from "@/components/FriendsList";
import { useEffect, useState } from "react";

export default function Home() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/data/friendsData.json");
      const data = await res.json();
      setFriends(data);
    };
    loadData();
  }, []);
  return (
    <div>
      <Banner />
      <FriendsList friends={friends} />
    </div>
  );
}
