import { users } from "../../db";

function BirthdayBox() {
  return (
    <div className="flex items-center">
      <i className="ri-gift-line mr-3 text-4xl text-rose-500"></i>
      <p>
        <span className="font-semibold">{users[6].username}</span> and <span className="font-medium">3 other friends</span> have a birthday
        today
      </p>
    </div>
  );
}

export default BirthdayBox;
