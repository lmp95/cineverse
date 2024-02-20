import { SEAT } from "@/mockData/theaterSeats";

function TicketCart({ seats }: { seats: SEAT[] }) {
  return (
    <div className="flex-[0.3] items-stretch gap-2 border-l-[0.5px] border-gray-700 p-12">
      <p className="text-lg font-semibold">Theater - Monique Max</p>
      <p className="text-sm">
        Seats -
        {seats.map(({ row, no }, index) => {
          let word = `${row}-${no}, `;
          if (seats.length - 1 === index) word = `${row}-${no}`;
          return word.toLocaleUpperCase();
        })}
      </p>
      <div className="flex flex-row items-center justify-between mt-6">
        <p className="font-bold">Total</p>
        <p className="font-bold">$ {seats.length * 8.99}</p>
      </div>
    </div>
  );
}

export default TicketCart;
