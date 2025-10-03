import { itemReadSingle } from "../../readsingle/[id]/page";
import Image from "next/image";
import { itemDelete } from "@/app/actions/itemDelete";
import { getToken } from "@/app/utils/auth";

const DeleteItem = async (context) => {
  const singleItem = await itemReadSingle(context);

  const params = await context.params;
  const itemDeleteWithId = itemDelete.bind(null, params.id);

  const payload = await getToken();
  if (singleItem.email === payload.email) {
    return (
      <div>
        <h1 className="page-title">アイテム削除</h1>
        <form action={itemDeleteWithId}>
          <h2>{singleItem.title}</h2>
          <Image
            src={singleItem.image}
            width={750}
            height={500}
            alt="item-image"
            priority
          />
          <h3>&yen;{singleItem.price}</h3>
          <p>{singleItem.description}</p>
          <button>削除</button>
        </form>
      </div>
    );
  } else {
    return <h1>権限がありません</h1>;
  }
};

export default DeleteItem;
