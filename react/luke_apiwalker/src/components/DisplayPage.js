import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';


const DisplayPage = () => {
    // parameters that are coming from the route
    const {category, id} = useParams();


    // creating state variable that will store the information returned from the axios api call
    const [info, setInfo] = useState({});


    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
            .then(response => {
                console.log(response)
                setInfo(response.data)

            })
            .catch(error => console.log(error))
    }, [category,id])



    return (
        <div>
            {category == "people" ?
                <>
                    <h3>{info.name}</h3>
                    <p>Height: {info.height}cm</p>
                    <p>Mass: {info.mass}kg</p>
                    <p>Hair Color: {info.hair_color}</p>
                    <p>Eye Color: {info.eye_color}</p>
                </> :
                category == "planets" ?
                <>
                    <h3>{info.name}</h3>
                    <p>Climate: {info.climate}</p>
                    <p>Terrain: {info.terrain}</p>
                    <p>Diameter: {info.diameter}</p>
                    <p>Population: {info.population}</p>

                </> :
                <>
                    <h3>These aren't the droids you're looking for!</h3>
                    <p>Try searching for people or planets</p>
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYVGBUaHBgaGBkaGBoYGBoYHBoaGhgaGBgcIy4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJCs2NDE0NDQ0NDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDU0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAJ8BPgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYDBwj/xAA4EAABAgQEAwUGBgIDAQAAAAABAAIDBBEhBRIxQQZRcSJhgaGxEzKRwdHwB1JicuHxI0IUM0Mk/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAMBAgQFBv/EACkRAAIBBAICAQQBBQAAAAAAAAABAgMRITEEEhNBUQUiMnFhFCNCobH/2gAMAwEAAhEDEQA/APGUIQgAQhCABCEIAEoQgq0cZAWqKpEit2sQOBS+0KYhHkklZMLDsyXOmIQqkl7JH1QUxKCrKpfDIsIUIKEpkgurYbtgbpITKkBafDJSuyXKfUvCPYoWSjya5fouzcPcASW1K3sjhgOyv2YOzLTKKpaqNjfCeLRoBbr4LpITjoTg5p6jYhbziDAKgkBefzEEsdQpsZdkKlFxPRpWO17GvboQo2KSzXjK7R2/J2xHkqrhCaJa6GT7t29DqrucbVh7rql3GWC6yjCTku5jix2o8xzUcLS4xLe0ZnHvsF+9v8LObrrUqnlimzPKPV2ABBKCkWiTtgqhWhSpSFUqMxWsoxOoQ7SQqrLqi4wyXq4Ady9s4Iw/2cHMRd2nQLzHhSQL3tAGpAXtEd7YMEnQNb8kfVKrSjRW2c7j2lVlUeor/ZgfxDxOrsgNgKeO68smX1qtBxLOl73E6kklZSai8ltpxVChGJXjp1JOb23chTTxVQiV1jGtyuNVya87yOvCNkNN05NCe1qywvf9l2cUIQsZYEIQgAQEIUoBQkKcmlWegAoQhUAEIQgAQhCABCEIAEIQgCww9m/M+i2mDQdFkJH3qV0AHjS622Bt0Weps1UcI1clLi1lcQ4XMKHJN0pdWQd2qJaHMjT8iHMNhWi8Y4ukvZvr3r3qJDqwrx/8QpfKapsXlCZq8WZjhqPljt5Oq36LbPFnBYDBf++H+4Lfg6+KvLYqOiphvyvvoagrPYtJ+zfb3XXb05eCv5kUcknpb2sIge83tN+YTuPV6zV9ETjdGTcUyqc9I1dKbblZCESJVlSr6RhVIVbIw1qMDlczhbddbiQUI9mc3l1bJno/4e4bSryLNFupVjx7iOSGIYNzc9ArvApMQYIGhpV3VeY8b4p7SI4g2rQdAubRX9VzHJ6QiadLjKn/AJSd2YrEI1SSqKZfup85E1VNHfUrocuojXxqdkc3mq5hOJQFxZLtK5vQuVPakaN0pcnRilkhkZCELllwQhCAAJQhKrxRAhSJSkUPZIIQhVAEIQgAQhCABCEIAF2lxep0Fz4LirGQhiw/Nc/tB+voobsi0VdjJUtrmc5wdqKCp+C0uGYg9tHBrizc5SBYkfJQ4GFOY8EAPY7bX7K2crkZLvh5GtD7uNO0aVp2jWlK7JbcWn8jVGSeCRgWMh7gM1+Sv489kq4+C8/wGB/9IIrSq9VjyrHBoLdvkkNZHRbtkyk1xa5vZJY0Hdxp6rH8aR2xIeb2jXGo0IPotjPYIx5o9jhldma5poRSnMdwK8943lmtityNytDQ3vtpU7nVPjGNk75Ezcs/BUcPtrHb8Vt2nVZDhZlYteQWvYbHxUy2VjorZ9q6SET4ps0K1XKSNCqFilx+UyRSR7r+0PmFXQWVK2ONyntIRoO0ztDv5hZeUZVdjhvyJX2jLW+0spKHovSeA8KzRGkiw7R6BYfC5ergvbuC5DJBzEXd6Lrc2r4ePZbeDjNeauoetsncSTvsoDjoSMo8V4XjE1mcV6J+ImKdrIDZo8915RNxKlV+nUvFQ7vbJm/LyG/Swiumnqre5dph9SVwWLkzcpWR1KUeqBoSoQkrCGDhomlO2TFMvgDkhCFzC4ICEIAVFUJCVZsAQhCqAIQhAAhCEACEIQAIQgBAHWDDzGnx6KVKxavrtoOg0XFxytp/s7Xuby8aJsq4B11D0WWGeiYRFBbQ0UjFIlGm6osGjVCsMUByrK8OxqTujrw5DJiNcNivU4jfd6BeV8PYg1rwC1wuL0t0Xpb8Ra8MytecwF6WsOZUWJRYTEBrhXei8d/EVrWuoBe69bc8ioOi8X/EiPWNlTI5aKSxFkXhOXo1zzvYffgrpm644TDywWD9IJXdys3dlFhEKaOtVHga/Bd5kVC5S4upQF1LCqz87IeziEAdl3ab46rRSrV3npHOz9Tbjpuuz9Mj1mr6Zj5b+xsXhLDi97RTUgL2aK8QYROzW+gWO/D7DqAxCNBQdTqrDjzEQyGGA3dc9Bp5pnMk+RyY0o6RyaEvHRnXe3hf8PMeJZ4vc4k3JKyE1GoFZ4lHq4rPzL11ORJU4KC9F+JSwrkR7qlNQlAXH/LJ1dCAJ4bTVBskc7ZGIoNiPNSmlKAkJS5fIHJCELnlwQhCAFKRCFLAEIQoAEIQgAQhCABCEIAFIl4YNSfdbc/TxXJrKkAbrvMHKAwbe93u/hBKOESISSTukYaEFNQgg0uDxHVbTfT0stLHhgAZ3AfuWU4dmDna0AW38f6W5maEDfms01ZmiDuiRgAYCaPYSGnKCQPAK0hPcWNo4VF6FwqPBQ5OVhAZqMPULQyMBhaKMZ4N18VSyHqyQyUxXO3K6htYg1XjnEcQxZ0t/UG+d16disVrHvc0Adm4HOi8qwftzRcb3c7z/lNp+2IqP0a1gpbkBRco7rLpouMVqCDiRVcIDaPousubkd6eIXaruE2lHtKxEnZF1KsV9hctmcO9U8g2oC2/CsjVwJFhf6LtxtSpORz+Q3L7V7NRhsmIUMNFqXPVeVcc4pniupoLDoF6bxFN+ygOcDelB4rwrGJnM43V/pNJynKtIw8y3aNFaWSkm3qljuqVYzb1VON0zmTuzbQjZAujW2qkY1DnLGlbJoY1xSBCGlUk7slClMSppKpJkjEIQsJIIQhAAhCEACEIQAIQhAAhCEACAEKRBg1ubDcoJSHQeyC7fRvX+FFJXaK+p7hYD73TXwiLlQDOae1hKfMQcp7tjzVhgkHOXDofr8kN2QJBg/ZeDt86i3ct/Kvz6i1jTwsPIrLjDcp0sfX7orWQD2VNTfWqTJp5HwjZGmgQxlve9PNW0vNFgOQ25Kglp2hqdOyAFEmseaygDqkm7W9pxvyGiUl8DO1ti8RTdA9xNOydCPjfXULE8L3iuJ/L6lGPzD4ji42YDZtbDv67Lnwu+kVw5tPkQnxjaIiUryNW5col9Oq6xdFGab0KqWG5bhw0OvXmp8BlbrlLNBsfvkpkvDymmy6HDp9pCqsrItMJh1dTZeo4DLZYYO5v4bLDcOyWZ7RTUr0eI8MYTs0LXz56po59L7pym9IzHF0zmBYNga9SvEJ99yvTsWmsz3V3uvLcabliPaeZ+q6HFtRpdf4uJcXOSm/ZTzL1EaLrs4VKYBRYqj7SN0FZA9y5pXpwFBVLk7susDEiHFIlSlmxYKpAE6ic0qts3A4IQhYyQQhCABCEIAEIQgAQhCABKAkXeCxQ3YlK46DBvfRPmHbaAbLrXZRY7hoL8yoTuTpCQWZiABv9/JWs1LDKGjU/Jc8Kl9CR3/QKZOu7bKclEnkmKwQpOD7RpYfeZUjpS4Vjw/ByRmV0Lsp6FcPcjNeNHa/MK2fCyEPGgLHW6/wobwCVjYT2GWqB90qPvvCpZmKGLfy8MRIbXC7S0HvBA9fospPcKTEeZLGDLCNy8+629HCm7q1oOVNEtoZGVsMpcNl400/JBbYe+8+6wcyefctdC4ThwWHKMzyDmefePTkO5bXBsFhy0JsGGLC5J1cd3OPM/wBJMe/xwnOAq80a3vcbD77lNkglK58+cSwaRHMGjfe68vD5qlw6Z9nEa7YG/Q2K2nFWH5BzNy48ydT8arBxDe2iZHVhT2ehF2ZoI8OVFwfDrQi5VNw1iH/m4/trpTkr0DIe5VUc2GXurnSX1B+KupaFWirYMO+YaLR4NLVcF3uJBQj2Zh5FSyZtOFJPK0uI7h81J4mnMkPKNXeis5GAGMDeQv13WJ4nnczzTQWHgslJefkdnpCJJwpKHt7M5ORK35LBcQscYjnZTlOhpYrXT0T/AF3Ovcq15oKbLTyOR0ejTTpXSRhXWK5PddbCNCY4VyNPgoM/hsJrC/KQ4g5QCfMcli/q1LFrDvE0ZzdDykKQpzkVsNKVqQJ1EtZySKglBCapYHNCELESCEIQAIQhAAhCEACEIQAqkS6a5vxXKtFDyW0SY0elgnSck51yLev8KIOaupHE21o4AWtyJ+ShppYBZeSW5vs2UGp0HLmVxmmdqG7uPqujnZiDyqnx4VWA7tI89R6JYwJ5lWtPL1VrIjPCLd8jvKhHzUJjMzFN4biUe0HSpB8QR80A0ek8GxwYQZsRbuNL+BrX4rTSMPKTTfUcnC3p6LHcEQ/9fyEtPQEhp+IW/l4N67/dvDY8ioKkmAygqqPGogc+pPZh16ZiO0fAW8SridmMjC7fRo5uOn33LyzinG85MFh7A9935nb35IIjlmW4znxFc5rPcFRXntXosDEgkUtrotfMMzuyjTf6Ksn4Y9qxg7z5K8WTKJRQopa4OGoNQt7hsw2MwO5i/ceSx+JSBY6ux8lNwGaMN36T7w+a2cei6juhUpdNm4loZBot7wjJVIcRYX+iyeGsD6eVF6dgMpkhC13XPyXR5UvFR6e2YX/cqpLW2SMVj5IbjW9KDxXmWIx7krYcVTt8g0GvVeeYhGqTRV4cOlJzfss33qt/GCvjPq41UaYNV1cVHilczlVO0joU1ZDYLADU2AqT0VdEmGxGRHjTK4DuGy645GyQDQ0LyGeBu7yHmoUraA/9jvRIgspl2/RnymEoJS0W9vthCACe0bpoCc8qVgBtUwlOcUgCXJ/ADEIQsxIIQhAAhCEACEIQAIQhAD2vogmtAkpZDdQgliFIpUeHaqioTBqx3gTDmGx8NloJGabEY4aOpcehWYVjgcSkZvfUfFVkromLszSSoq3wuuEs7LE8f6UuTFLfdFGnGZX5vilDT0XgKPWYdyNz4gE+YK9Ta2i8g/DuIf8AkD8pbfuobO7x2qL0Li3HBLQCQR7V9WwxvXd3QfRShctmX474h7RgQjdtQ5w0BOtO/b4rzyajZRQald48XVxNSbknc81WZ8zi4+CgYlY6QxkaSdVRyz88xmNwDT1Ck4rOUBAP2VHk2BkMuc7ITQ1pvqAPgrxRVs0U7IB7FSQZQsdQhaOSxaC5rRnbUgW796qRMYdmIcB8F3PpkOrXYw8uX2tovOApdznhprl16c1609wawnYD0WQ4Aw3KwxCL6D5q14txEQoJ5nbn3JXNfn5PWP6MnFk4UJVZ+9fr0YjibESXkA9o1PQLOPNkj4xeS83JK5zD6BauY1RpqC9GjiRuk2cMy5E1NFzz7ImIwhtfE5Co/dsPjReem+zOmsIruIqOhVGjHAHxBB8yFFlz/heP0n0UuDBzSbq3c4Of41zKHLV9g80/1IVo+v2V/kowEqChjardrCEjg1NcU5zlzCJP0AicEOTSUp4JGoQhIAEIQgAQhCABCEIAEIQgB1bJoSkpEEssWXaowYu0u6yRzbKqLEV4oVJwv/tZ+5cJgXU/AGVi15AlS3ghbNNL6k95SYmyoBTZY6KTNNqEkaT+DsX/AOPGD3CraODhqSCNB8Au2KYo+ZiGLENa2YNmN2AHqs9Juo+neFNmYtAQgCLORSTlCjxzlb0XWC2t1Fxl9GeSlbBlPCYYsQNrbU9ApWJwS6hBOVoo0dw1PVdcDl6NLzqTQdN1MdCzGm1fJaaMe00hUnaJCw6QcaEDVb7hZj8wY5pINgeX8KFh0uBQUXoXCOHguDiNL+K77qKlx22jlV05SUU8vBrpGXENgaNAP7Xl/HmKZ4paD2Wmg+q9LxiZ9nCe7uoOpXh8/GzxCTzWb6VT7TlVl6K8z8o0Y62wGgUeafZSHWCrpp3zWTn1e02jp8eFojGXKh8RP7DGDV7h8B9hT5Ubqti/5ZnuhinjuuYt3NEtFxAg0htZtlI8qLOk5ZZ3fQed1pohplWdxO0Fw/WR5lWh+SIlooCU+GkpZMa6i3OVmJFcUjUhKc1L7XYWEdqmFOcmpcn6JP/Z" alt="Obi Wan Kenobi wearing hood and holding blue lightsaber" />
                </>
            }

        </div>
    );
};


export default DisplayPage;