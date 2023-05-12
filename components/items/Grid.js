import Item from "./Item"

export default function Grid() {
  return (
    <div class='h-full w-full flex flex-row p-10 gap-10'>
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  )
}