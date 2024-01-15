'use client'

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as HoverCard from '@radix-ui/react-hover-card';
import PlayerInfoHoverCardContent from "./PlayerInfoHoverCardContent";
import { Player } from "@/types/Match";

export default function PlayerInfoShow({ player, isCurrent, isCaptain }: { isCurrent?: boolean, player: Player, isCaptain?: boolean }) {
  if (!player) {
    return <></>
  }
  return (
    <>
      <HoverCard.Root openDelay={0} closeDelay={0}>
        <HoverCard.Trigger asChild>
          <span className="cursor-pointer text-blue-600 hidden md:inline">{player.name} {isCurrent && '*'}
           {isCaptain && <span className="text-xs">(C)</span>}
          </span>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content className="HoverCardContent" side="right" sideOffset={10}>
            <PlayerInfoHoverCardContent player={player} />
            <HoverCard.Arrow />
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>

      <Dialog >
        <DialogTrigger>
          <span className="cursor-pointer text-blue-600 block md:hidden overflow-hidden truncate w-32 text-start">{player.name} {isCurrent && '*'}</span>
        </DialogTrigger>
        <DialogContent className="border-0 bg-transparent">
          <PlayerInfoHoverCardContent player={player} />
        </DialogContent>
      </Dialog>
    </>
  )
}
