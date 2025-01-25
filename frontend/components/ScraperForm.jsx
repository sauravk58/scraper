import { useState } from "react";
import axios from "axios";

export default function ScraperForm() {
  const [url, setUrl] = useState("");
  const [platform, setPlatform] = useState("");
  const [data, setData] = useState(null);

  const handleScrape = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/api/scrape/${platform}`, { url });
      setData(response.data);
    } catch (error) {
      alert("Error scraping data");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <input type="text" placeholder="Enter URL" className="border p-2 rounded" onChange={(e) => setUrl(e.target.value)} />
      <select onChange={(e) => setPlatform(e.target.value)} className="border p-2 rounded">
        <option value="youtube">YouTube</option>
        <option value="instagram">Instagram</option>
      </select>
      <button onClick={handleScrape} className="bg-blue-500 text-white p-2 rounded">Scrape</button>
      {data && <pre className="mt-4">{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
