import axios from "axios";
import axios from "axios";
async function getArticle(id) {
  return await axios.get(
    "${process.env.NEXT_PUBLIC_API_BASE_URL}/articles/${id}"
  );
}

export const Article = {};
