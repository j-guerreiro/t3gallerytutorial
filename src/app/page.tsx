import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/41ddceee-0e80-40e6-b22a-b160bd18f0bf-22ozx5.webp",
  "https://utfs.io/f/c8946f33-45c6-47b1-a60b-35dc34b01130-zj1yg.webp",
  "https://utfs.io/f/06b6ac31-6395-4b7d-a7af-cf66ef6b95d6-c37p7u.webp",
  "https://utfs.io/f/7823924c-f1e1-4b3c-802b-424727995fd2-1lxsvw.webp",
  "https://utfs.io/f/a9e7af95-b284-492e-a601-57c77df0f868-bwp42c.webp",
  "https://utfs.io/f/b69d9e1b-8e57-49d0-bc42-83e787cd53cf-vg6kna.webp",
  "https://utfs.io/f/5470d839-ce47-4a7e-ba2e-02084aa3567e-lx3crv.webp",
  "https://utfs.io/f/23de1632-b3bb-467f-9a8e-78334bca9b1c-9s9wn5.webp",
  "https://utfs.io/f/f50158a7-93df-4f39-9cf4-730627b86600-fng50d.webp",
  "https://utfs.io/f/b3d73c0e-e0b2-4b3f-90f3-204971f4d102-1yee4.webp",
  "https://utfs.io/f/1434ced2-d0ba-41fb-9f41-d85f159280d8-fngetr.webp",
  "https://utfs.io/f/85dfe2ee-4f8d-41c0-be14-a652e5250d5f-r6noc9.webp",
  "https://utfs.io/f/6b387960-0594-44f9-b525-49ba659b6b5a-zd4mf9.webp",
  "https://utfs.io/f/c5dc26e5-e2ce-4315-a5c7-83b6746a9ebe-yqbkhk.webp",
  "https://utfs.io/f/3ac1d8b7-c015-42b9-a25e-45b6be8c7218-t9ff88.webp",
  "https://utfs.io/f/bcaa62f6-ee47-4f6a-88a1-607a2c8401ff-19apm2.webp",
  "https://utfs.io/f/c603d340-66ae-45fe-b3ce-352bbade8bb2-j7mfn9.webp",
  "https://utfs.io/f/3a84af9b-b859-4404-a3b8-8800966240b7-c0w2lx.webp",
  "https://utfs.io/f/c24f2801-106c-4a4e-8a9e-a8193212c3de-rhzv5t.webp",
  "https://utfs.io/f/7740e8f7-d366-4f37-b2e1-01943546af19-hk5ht.webp",
  "https://utfs.io/f/77d7d13e-1f56-47d4-ae00-ac614f35c083-eo28j3.webp",
  "https://utfs.io/f/2a7690fa-8322-48c7-a698-57c4f9c1485d-1zbjs.webp",
  "https://utfs.io/f/d16e6a6a-d618-466b-9d18-dcc947be1d21-uo9jpa.webp",
  "https://utfs.io/f/68c48a17-ef58-4a96-8d51-723d5b7ce073-hmcu0c.webp",
  "https://utfs.io/f/0febec18-7141-4789-a05e-9134193e3ae5-hlxbt8.webp",
  "https://utfs.io/f/ca44396d-b299-4b35-838f-ac1c82171707-htq2d0.webp",
  "https://utfs.io/f/e17a4d21-3fa5-4a55-bbf0-7cdaaf11bcd0-97ebai.webp",
  "https://utfs.io/f/bf636007-af40-4669-b677-dbe8b0ec0826-pf1md0.webp"
];

const mockImages = mockUrls.map((url, index) => (
  {
    id: index + 1,
    url,
  }
))

export default function HomePage() {
  return (
    <main> 
      <div className="flex flex-wrap justify-center gap-4">
        {mockImages.map((image) => (
          <div className="w-48 p-4" key={image.id}>
            <img src={image.url} />
          </div>
        ))}
      </div>
      <p className="text-center">Hello Pets! (gallery in progress!)</p>
    </main>
  );
}
