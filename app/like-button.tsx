'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";

export default function LikeButton() {
    const [likes, setLikes] = useState<number>(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return <Button onClick={handleClick} variant="default">
        Like ({likes})</Button>;
}
