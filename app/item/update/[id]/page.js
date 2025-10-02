import { itemReadSingle } from "../../readsingle/[id]/page";

const UpdateItem = async (context) => {
  const singleItem = await itemReadSingle(context);
  return (
    <div>
      <h1>アイテム編集</h1>
      {singleItem.title}
    </div>
  );
};

export default UpdateItem;
