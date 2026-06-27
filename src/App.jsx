import './App.css'
import futbol from './futboll.json'

console.log(futbol);


const users = [
  {
    id: "a12d4f7c-3c61-4b4f-92a4-8d6c1d72f901",
    name: "Daniel Carter",
    email: "danielcarter@example.com",
    eyeColor: "brown",
    friends: ["Emma Brooks", "Liam Turner"],
    isActive: true,
    balance: 3150,
    skills: ["javascript", "react", "node.js"],
    gender: "male",
    age: 29,
    img: 'https://cover.cdnlibs.org/uploads/anime/25140/cover/db4b7db6-3588-4e0e-9fa4-b8c5adaa656c.jpg',
  },
  {
    id: "b34f7e91-5c82-4d0b-ae91-2a8d5d3e7b45",
    name: "Sophia Mitchell",
    email: "sophiamitchell@example.com",
    eyeColor: "blue",
    friends: ["Daniel Carter", "Olivia Scott"],
    isActive: false,
    balance: 1850,
    skills: ["html", "css", "figma"],
    gender: "female",
    age: 24,
    img: 'https://cover.cdnlibs.org/uploads/anime/25140/cover/db4b7db6-3588-4e0e-9fa4-b8c5adaa656c.jpg',
  },
  {
    id: "c92b8d14-91a3-47d5-80ef-4e61c5f8d372",
    name: "Michael Adams",
    email: "michaeladams@example.com",
    eyeColor: "green",
    friends: ["Ethan Hall", "Grace Young", "Sophia Mitchell"],
    isActive: true,
    balance: 4275,
    skills: ["python", "django", "sql"],
    gender: "male",
    age: 35,
    img: 'https://cover.cdnlibs.org/uploads/anime/25140/cover/db4b7db6-3588-4e0e-9fa4-b8c5adaa656c.jpg',
  },
  {
    id: "d51c9e82-4f9d-41f6-a1cb-5b3f9d7e2c81",
    name: "Emily Walker",
    email: "emilywalker@example.com",
    eyeColor: "hazel",
    friends: ["Michael Adams", "Noah Evans"],
    isActive: true,
    balance: 2980,
    skills: ["vue", "typescript", "sass"],
    gender: "female",
    age: 27,
    img: 'https://cover.cdnlibs.org/uploads/anime/25140/cover/db4b7db6-3588-4e0e-9fa4-b8c5adaa656c.jpg',
  },
  {
    id: "e73d1a45-6f4b-49e2-bd52-7d6e4f1b8a90",
    name: "James Robinson",
    email: "jamesrobinson@example.com",
    eyeColor: "brown",
    friends: ["Emily Walker", "Lucas Green"],
    isActive: false,
    balance: 1120,
    skills: ["java", "spring", "docker"],
    gender: "male",
    age: 40,
    img: 'https://cover.cdnlibs.org/uploads/anime/25140/cover/db4b7db6-3588-4e0e-9fa4-b8c5adaa656c.jpg',
  },
  {
    id: "f28b6c90-8d14-4d71-93bf-9c1e7f5a4d63",
    name: "Olivia Scott",
    email: "oliviascott@example.com",
    eyeColor: "blue",
    friends: ["Sophia Mitchell", "Emma Brooks"],
    isActive: true,
    balance: 3890,
    skills: ["ui", "ux", "figma", "photoshop"],
    gender: "female",
    age: 31,
    img: 'https://cover.cdnlibs.org/uploads/anime/25140/cover/db4b7db6-3588-4e0e-9fa4-b8c5adaa656c.jpg',
  },
  {
    id: "g84f3d21-7b56-4e83-9eaf-1f9d6b2c5e47",
    name: "William Foster",
    email: "williamfoster@example.com",
    eyeColor: "gray",
    friends: ["Daniel Carter", "James Robinson"],
    isActive: false,
    balance: 2435,
    skills: ["go", "kubernetes", "aws"],
    gender: "male",
    age: 33,
    img: 'https://cover.cdnlibs.org/uploads/anime/25140/cover/db4b7db6-3588-4e0e-9fa4-b8c5adaa656c.jpg',
  },
  {
    id: "h61e5b92-2d37-4f18-a2d4-3b7c8e9f0a26",
    name: "Emma Brooks",
    email: "emmabrooks@example.com",
    eyeColor: "green",
    friends: ["Olivia Scott", "Daniel Carter", "Grace Young"],
    isActive: true,
    balance: 4720,
    skills: ["react", "next.js", "graphql"],
    gender: "female",
    age: 26,
    img: 'https://cover.cdnlibs.org/uploads/anime/25140/cover/db4b7db6-3588-4e0e-9fa4-b8c5adaa656c.jpg',
  },
  {
    id: "i19c8a73-5e64-4b39-91cf-6d2e8f4b1c58",
    name: "Lucas Green",
    email: "lucasgreen@example.com",
    eyeColor: "brown",
    friends: ["James Robinson", "Noah Evans"],
    isActive: true,
    balance: 3365,
    skills: ["c++", "qt", "opencv"],
    gender: "male",
    age: 30,
    img: 'https://cover.cdnlibs.org/uploads/anime/25140/cover/db4b7db6-3588-4e0e-9fa4-b8c5adaa656c.jpg',
  },
  {
    id: "j47d2f81-9a25-4c56-b8de-5f1a7c3d9b14",
    name: "Grace Young",
    email: "graceyoung@example.com",
    eyeColor: "blue",
    friends: ["Emma Brooks", "Michael Adams"],
    isActive: false,
    balance: 1590,
    skills: ["marketing", "seo", "analytics"],
    gender: "female",
    age: 28,
    img: 'https://cover.cdnlibs.org/uploads/anime/25140/cover/db4b7db6-3588-4e0e-9fa4-b8c5adaa656c.jpg',
  },
];

// https://cover.cdnlibs.org/uploads/anime/25140/cover/db4b7db6-3588-4e0e-9fa4-b8c5adaa656c.jpg





function App() {


  return (
    <>
      <ul>{
        users.map(({id, name, email, eyeColor, isActive, balance, gender, age, friends, skills, img}) => {
          return <li key={id}>
            <h2>name: {name}</h2>
            <p>email: {email}</p>
            <p>color eye: {eyeColor}</p>
            <p>{isActive ? "користувач авторизований": "користувач не авторизований"}</p>
            <p>balance: {balance}</p>
            <p>gender: {gender}</p>
            <p>age: {age}</p>

            <span>список друзів:</span>
            <ul>{friends.map((item, index) => {
              return <li key={index}>
                <p>{item}</p>
              </li>
            })}</ul>

            <ul>{skills.map((skills, index) => {
              return <li key={index}>
                <p>{skills}</p>
              </li>
            })}</ul>
          </li>
        })
        }</ul>
        <ul>{
          futbol.map(({id, name, club, photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRERVKf0gFnk8rm29MSiSQDx5xSDv4WGDYsKX-fR5T_9Q&s=10'}) =>{
            return <li key={id}>
              <h2>name: {name}</h2>
              <p>club: {club}</p>
              <img src={photo} alt={club} />
            </li>
          })
          }</ul>
    </>
  )
}


export default App
