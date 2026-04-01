export default function HelloWorld() {

    const propsUserCard = {
        nama: "Narutoo",
        nim: "27347467",
        tanggal: "2025-01-01"
    };

    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>

            <GreetingDapoi />
            <QuoteText />

            <UserCard 
                nama="dapoi" 
                nim="2455301101"
                tanggal={new Date().toLocaleDateString()}
            />

            <UserCard {...propsUserCard} />

            <img src="/img/alien-svgrepo-com.svg" alt="logo" width="100" />
        </div>
    );
}

function GreetingDapoi(){
    return(
        <small> Salam dari dapoi </small>
    )
}
function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}