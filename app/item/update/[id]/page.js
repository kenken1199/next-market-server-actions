import { itemReadSingle } from "../../readsingle/[id]/page";

const UpdateItem = async (context) => {
  const singleItem = await itemReadSingle(context);
  return (
    <div>
      <h1>アイテム編集</h1>
      <form>
        <input
          defaultValue={singleItem.title}
          type="text"
          name="title"
          placeholder="アイテム名"
          required
        />
        <input
          defaultValue={singleItem.price}
          type="text"
          name="price"
          placeholder="価格"
          required
        />
        <input
          defaultValue={singleItem.image}
          type="text"
          name="image"
          placeholder="画像"
          required
        />
        <textarea
          defaultValue={singleItem.description}
          name="description"
          rows={15}
          placeholder="商品説明"
          required
        ></textarea>
        <button>作成</button>
      </form>
    </div>
  );
};

export default UpdateItem;
