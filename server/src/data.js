const users = [
  {
    id: "1",
    fullName: "Selçuk Başak",
    profile_photo: "https://randomuser.me/api/portraits/men/33.jpg",
    age: 52,
  },
  {
    id: "2",
    fullName: "Atilla Başak",
    profile_photo: "https://randomuser.me/api/portraits/men/34.jpg",
    age: 48,
  },
  {
    id: "3",
    fullName: "Ramazan Başak",
    profile_photo: "https://randomuser.me/api/portraits/men/35.jpg",
    age: 44,
  },
  {
    id: "4",
    fullName: "Tuncay Başak",
    profile_photo: "https://randomuser.me/api/portraits/men/36.jpg",
    age: 46,
  },
];

const posts = [
  {
    id: "1",
    title: "Selçuk Başak'ın gönderisi",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    user_id: "1",
    cover:
      "https://149369349.v2.pressablecdn.com/wp-content/uploads/2012/10/twitter-cover-photo-8.jpg",
  },
  {
    id: "2",
    title: "Atilla Başak'ın gönderisi",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    user_id: "2",
    cover:
      "https://149369349.v2.pressablecdn.com/wp-content/uploads/2012/10/twitter-cover-photo-7.jpg",
  },
  {
    id: "3",
    title: "Ramazan Başak'ın gönderisi",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    user_id: "3",
    cover:
      "https://149369349.v2.pressablecdn.com/wp-content/uploads/2012/10/twitter-cover-photo-3.jpg",
  },
  {
    id: "4",
    title: "Selçuk Başak'ın gönderisi 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    user_id: "1",
    cover:
      "https://149369349.v2.pressablecdn.com/wp-content/uploads/2012/10/twitter-cover-photo-4.jpg",
  },
  {
    id: "5",
    title: "Atilla Başak'ın gönderisi 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    user_id: "2",
    cover:
      "https://149369349.v2.pressablecdn.com/wp-content/uploads/2012/10/twitter-cover-photo-5.jpg",
  },
  {
    id: "6",
    title: "Ramazan Başak'ın gönderisi 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    user_id: "3",
    cover:
      "https://149369349.v2.pressablecdn.com/wp-content/uploads/2012/10/twitter-cover-photo-6.jpg",
  },
  {
    id: "7",
    title: "Tuncay Başak'ın gönderisi",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    user_id: "4",
    cover:
      "https://149369349.v2.pressablecdn.com/wp-content/uploads/2012/10/twitter-cover-photo-7.jpg",
  },
];

const comments = [
  {
    id: "1",
    text: "Selçuk Başak EN BÜYÜK TRABZON",
    post_id: "1",
    user_id: "1",
  },
  {
    id: "2",
    text: "Atilla Başak EN BÜYÜK GALATASARY",
    post_id: "2",
    user_id: "2",
  },
  {
    id: "3",
    text: "Ramazan Başak EN BÜYÜK BEŞİKTAŞ",
    post_id: "3",
    user_id: "3",
  },
  {
    id: "4",
    text: "Selçuk Başak EN BÜYÜK TRABZONNNNNN",
    post_id: "4",
    user_id: "1",
  },
  {
    id: "5",
    text: "Atilla Başak EN BÜYÜK GALATASARAYYYYYY",
    post_id: "5",
    user_id: "2",
  },
  {
    id: "6",
    text: "Ramazan Başak EN BÜYÜK BEŞİKTAŞŞŞŞŞŞ",
    post_id: "6",
    user_id: "3",
  },
];

export default {
  users,
  posts,
  comments,
};
