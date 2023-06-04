import React from 'react'
import './Feature.css'

const Feature = () => {
    const arrdata=[{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQc0ftyGXZXqaLXYEkhW7r63ai3Jv5-uXbsA&usqp=CAU',h3:'Fully Responsive'},
    {img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBAPEA8PDw8PFRcPEA8VFw8PDxUQFREWFxURFRcYHSggGBolHRYXITEhJSkrLi4uFx8zODUtOigtLisBCgoKDg0OGhAQGi0lICUtLS0tLS8tLS0tKy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEEBQYHAwj/xABCEAABAwEFBAcFBAkEAwEAAAABAAIDEQQFBiExEkFRYRMicYGRobEHMlLB0SNCYnIkM0NTgrLS4fAUY3OiNJLxFf/EABsBAAIDAQEBAAAAAAAAAAAAAAAFAQIGBAMH/8QANxEAAQIDBQYFAwMDBQAAAAAAAQACAwQRBRIhMUFxgZGhsdETUWHB4SIy8CNC8RRSYgYzcpLC/9oADAMBAAIRAxEAPwDuKIiEIiIhCIiIQiIiEIiKLnAZnQb0IUkWKtV/WaPIyBx4Nq7zGXmsXNi0D9XCXcy4DyH1XuyWivyaenVckWfl4f3PG7HpVbSi0mTFc50EbR3k+at3Yktf7ynY1nzC9xZ8XWnHsuY2xLDK8dg7kLfkXPxiW1/vAf4Y/ovaPFloGojd2gg+SDZ8b04/CG2xLnRw3D2JW9ItRgxkdJIKc2u+RHzWUsmJLNJltljvheC3z0814vlIzc28Mei6Yc/LxMGvG+o60WaReccrXAFrg4HQgghei511oiIhCIiIQiIiEIiIhCIiIQiIiEIiIhCIiIQi8ppWsaXPcGtGpOQWMva/I7PVo68nwjQdp+Wq068LwkmO3K+tNBoB3f4V1y8m+LicB12JZO2pDl6tb9TvLQbT7caLYbwxS0ZQN2/9w5N7m6nvotdt14SS5yyFw5nZHdTJY2W1/D4q1c4nMmqdQZNkPIb9fzYstNWlFj4OdUeQwHzvqfVXj7W0aVPkF4Ptbt1B5q3JVCusMAXCYjivR07j94+i8y88T5qJRXooqm0eKdIeJ8SoEqhKsrL1FpePvHyKm22neAfJWxKgSoutOiuHuGqzFjvV0ZrHIYndtAe3ce9bRduLyKCdtR+8GXiN/d4Ln5KqyVzdDT0XNGk4cX7hjz496hd0tPxoB+k4eWnDtQrtNitsc7dqN4cOWo5EbirpcbsF6ujcHNcY3/ENDyI4dq3y4sUNlpHNRkhyDvuu7OB5JHM2e+Fi3Ec/nctLJ2nDj/S7A8j22HmtoRUBqqrgTNEREIRERCEREQhEREIRERCEWsX9f+zWKA9bR79dn8I+u70YkvnZrDEeto9w3chx58PTTbRPs5DX0TOSkr9Hv3D3PsNVn7UtTw6woRx1Pl6D18zpkMa0nPaNmu9xz/uSrKR5calRJVCU9awBZNzy5UKiUJRXVQEUCVUqJUqwVSokoVJkTne60nsB+SFYCpoF5kqhU5Y3N95pHaD815FSMVamioUKEqJUq1FQlRJVSVEqVZCpxWgt5jgvIlUKCKq4wW+YXxVs0jlcXR6B594cjy/zs36OQOAINQVwZkhaajVbrg7E2wRFIeocgT908Oz0SOfs6g8SENo9+/fPRWbaVaQop2H2P5yy6OihG8OFQppIn6IiIQiIiEIiIhCLDYhvP/Tso39Y/JvIb3H5c1lJ5mxtc9xo1oLieQXOb2vAyvfK7V2TW8BuH+c12Scv4r6nIc/RK7Unf6eFRp+p3Ian2HrjorO1T0yrVxzJ1Pb2qxKq41zOpUCtI1tAsM914oUQqCuqoiIxpcQ1oJLiAAMySdAEKyoKkgAEk5ADMkncFtdzYKe8B9ocYmn9mKF5HM6DzPYs7hnDrbM0PeA6cjXc2o0HPiVsaSTVpkm7By8+3f8ADq5CxGgB8xif7fLb57MvOqxdhuOzQj7OFo5nru8XVWURUKUOcXGrjXatBDYGC6wUHkMByRwB1WJt+HrLODtwtBP3m/ZmvHLXvqssFVSx7mGrTQ+iIkNrxR4qPUV6rm1+YKliBfATMwZ7FPtQOwe93Z8lqBXeFqGLsLNna6aFtJxm5oyEg/q579/JzJ2oahkbj37pBPWM2hfA/wCvbtwprzRRKkVElPVnghKiUUShWQlGPLTUaqhKgSpCuF0zA+IOlb0Lz1mjKupH1Hp3reFwKw2t0MjZGGhaars2HbzbaIWPB1Hgd4WZtOU8F99v2nkfzFamzJvxmXHfcOY/MOay6IiWJoiIiEIiKLnUBJyAzJ5IQtaxhbaBsIPvdZ/YPdHjn4LRrTJtHkMh9Vkr5tpkfJJvkOXIafILDrTSUDwoYGvvr2WBtOa8eO5wy02DLvvRURRK7UuAQqiqoFCshW6YCugGtreOLYhz+875LTGgkgAVJNAOJOgXYbvsohijibowbPad57zUpbakcshBg/d0/KJ7YUsIkYxHZN6nLhjyV0rO8bfFZ43zTPDI2CrnHyAGpJ3Aaq8XFPaNiE2u0uhYf0ezOLGgaOlGT5Dxzq0cq8UmloBjPu6arUTMcQWXtdFd4i9o1pmcWWX9Gi0D8jM4cSdGdgz5rTbTaZJTtSyPkd8T3OefFy8QqhP4UFkMUYKdeOazsWPEimrzX88lcWS2SwmsUskZ4sc5h8it2w37RponCO2fbRnLpQAJm8yBk8eB7dFoQRESBDiijx345qIUeJCNWHtwX0dZLSyZjZI3NfG8bTXDMEK4XIvZjiAwzCySO+ynNGV0ZLupydpTjTmuurPzEAwX3TuWklo4jQ7w37VzD2j3SIJW2pgpFOaSAfdmpXa7HAHvB4rT6rtWJruFqsk8FKucwln/ACN6zD4gLhFnnpkdPRPbLmC+Fdd+3Ddos9a0qGRb7f3Y79VeEqhKVUSmqUhUJUShQlSrKJK272fXuYpegceq/rM7RqO8ei08lTgmdG9r2mjmkOaeYNV4zMAR4RhnXrpzXVLRjBiiINOmvJfQjHVAI3qaxOHreJ4WPGjmhw7xosssXQjArZA1xCIiIQixWIrT0dmkI953UHfr5VWVWq41np0TN3Wee4AD5r3lmX4rR69MVyT8XwpZ7vSnHD3WlWx9XU4ZK3UnOqSeOa8ytW0UC+ek3jVChRRKlCFUQqJUqwCyeG49q12dp02w7wz+S62uSYXfs2yz/mA8iPmutpBa9fEbs9ytd/p8foP/AOX/AJCsL7tRgs1omGsUT5B+ZrCR5r51X0LiSAy2O1Mbm50MgaOLujNB4r55CtZYF120L0tT7mb/AGUlUKKkE1ShAqoFVWChThlcxzXtNHMIc08HNNQfEL6Ms0wkYx40e0PHeAfmvnFfRd3w9HFFGdWMaw9rWgfJKbWGDN/snFkk1eNnurlfPV+QiO1WmMaMlewdjZHAei+hV8+4ieHWy1uGjppHDsMjqKLJ+92wdV6Wt/tt2+ytYZaZHT0XurFesUtMjotA06LOuZXEK4KiUJUSV6KoCEqBKqSoEqVYBdM9mVvrGYyf1biB+V2Y89pdDXGPZ7ati0uZueK97XCnkSuyROq0HiFkbSh3Jl3rjxz51WrkH35dvphw+FNERcK7EWiY3lrKR8LNnvJz9Vva5zjN/wCkSdrR/wBGld9misfd2Si3HUldpHQn2WuFUKFFpFiUKgVUqhUqUJUSUJUSpVl6wTmN7JB7zCCO1pqPRdmgmEjGvbm17Q5p5EVC4oAuhYEvYSRGzvPXhzbxMZocuwmnYQlFrQbzA8aZ7D89VobCj3IjoTv3ZbRpvHRbcVwTGNyGw2p8dKROJfAdxjJyb2t93u5rvW0FhsTXDFb4eik6rh1opQKuY7jzB3jf3AhXKTHgvqcjn3T+cl/Gh0GYy7LgSqFmL9w1abE8iVn2derM2pjcO3ceRzWJ6M0qtC1zXCrTULOPY5ho4UKopNBOQ1QMNKrP4cwvabY8dG3ZhzDpngtYARQ7PxnkO+is+I1jbzjRQyG57qNFVcYCuJ1ptkZcPsYCJZHZFpINWMy3kgZcAV21Ym47qiscQijrTVzjm9797nH5bllNoLOTcwY0SugwC0kpL+BDu65lWl7W0WeCWd2kTHPpxIGQ7zQd6+enOJJJNScyeJ3ldN9ql9dRtijNS6ks/JozYzvI2v4RxXMU2sqDchF5/d0H8pVakUPiBg06lERE2oli9I5KZblIleCk1y9AVUt1XoSoFVJVCVeigLLYVl2bZCeJLT3sI9aLuVgdWNq4FcbqWmA/jaPF1F3i6DWMLN22P1mn/H3PdaGyT+k4evsFfIiJMmiLm2Mv/Ik7R/I1dJXPMdR0nr8Qr6j5JhZhpH3e4Se3W1lK+RHQj3WsKJKFUK0ixaoqFCVElSrAISqEqpUCUKykDrzXvYba+CRssZo9uY3g6DZPEECititkw7hKW00kkJigOY+N4/CDoOZ8CvKO+HDYXRDguqWhRYrw2EKnPZ610W8XJe0dsjEkeThQPZUbTXU8xwO/xWTodadytLrumCzN2YY2trq7VzvzOOZWQWSiXL58OtNK5rdQvEuDxKXtaZLxMdRQgEGtQaEEcFhrThKwSGrrJHUk12axa1+AjiVn0UNc5pq00VnNa4UIqsFY8KWGI1bZIqjQuBlIPEbdVmGsOQ0A0XqiHOc41caqWtDRQCi8g05LBYpxDHYItp1HTPB6KLe4/E7g0bz3LYlYXpdcFpZ0c8TJW7qjMHi0jNp5hTDuBwLxUeirEvFpuGh9VwW2Wx0znySOLpJCXOca1JJ04AfQK1dTct4xR7PpYNqWyF00QzMZzlYOVPfHZnyOq0ZayXiQ4jb0M4dPSmn5RZePCiQ3UiDHr+fyiIi6AvBFFEVwpUg5VJXmq1Vgoor65BW0wfnZ/MF3i5v1a4Zhpm1a4B+InwaT8l3W6G0jCzltn9Zo/wAfc9k/soUhO2+wV8iIkyZotH9oMWcTxurX5eq3ha9jWy7dmcRq3rDuOfkSumTfcjsPrTjguK0oXiysRo8q8MfZczKiVUlUK1awQVCqEqioVKsqFChW34FuASu/1UraxtNImnQuBzJ5A+fYvOPHbBYXu/n0XTKyz5iIIbNeQ1P5sV1hHCmTbRaW1JzjhOlNznD0HjwG9Kqi9wAJJAAzJOQA4lZSPHfGffeewW3lpWHLsuQxt8yfM/mCksTfOILLYx9vM1jtRGKukPY0Z056LRsXe0QkugsJpTqutWteIiB3fiPduK5zLI57i57nPc41c5xLnE8STmSu2Xs5zxeiYDy1+FyTFotYbsPE+enyul3h7UxpZ7KXD45HBv8A0bX+ZYaX2lW92ggZ+VhP8zitKUkzZIwGil3jilr56O41vU2YLcovaTbxr0L+1n9JCy93+1I5C0WUU3ujcQe5jv6lzZFZ0jAdm0bsFDZ6OD93HFd6uTFFjtlBDMNv90/qS9wPvdoqs4vmtpIIIyIzBGRB4rfMK+0GSIththdLFoJs3Ss/N8Y8+3RLpiynNF6Ea+mu7z67SmMvaYcbsUU9dPhdYWh44wS20B1oszQ20e89gybLxI4P9d/FbtZ52SNa9jmvY8bTXAgtIO8FeyWwYz4L7zDj+YFMYsJkVt12S+a3AgkEEEZEHIgjUEKK6b7TMLAh1ugbRzc7Qwbx++HMb+We415itZKzDY8O+3ePIrMzEB0F907vUKqoSioupeKKhSqoSrhStkwJBt2na3MB8SQB5VXbrA2kbVy32bWLqmSnvmg/K3+5cusMbQAcFkbUiX5p3pQcM+dVpJFl2A31x4/FFJERL11ore2Qh8bmnMEUVwiELi9us5ikfGdWEt7tx8FarbceXbsSCZoydk/t+6fDLuC1IrXSsbxoQfx2699hCwM7Lf08d0PTTYcu20IVEoVQroXMFe3Nd7rVPHC3LaPWd8LRmXeHnRdis0DYmNjYNljAGtHAALUPZxd+zE+0OGch2Gn8LT1iO05fwrdVm7Tj+JFuDJvXXsthY8sIUC+c3Y7tO6LkntFxcZnusdndSFh2Zng/rHjVgPwA+J5a7Z7Rr/NksuxG6k9prGwjVrB78g50IA5uB3LigV7Olr36rt3fsrWhMlv6Td/bupqiqqJ2kiqqqKkrBCIiopUKqIiuELbsB4sdY5BDKSbLIetv6Nx/aDlxHfrr2ZrgQCDUHMHUEL5qXWfZbf5midZJDWSzisZOph02f4SQOxzeCTWrKCnjN39+/FOLNmjXwnbu3Zb29ocCCAQRQg5gg6grhOM7j/0NqdGAeif9rEf9sk9WvEGo7gd67ytM9p909PY+laPtLKekB39GcpB2aO/gXFZkx4UYAnB2B9jx5Ersn4PiQidRj3XGkKoi1oCzoQo1pJAAqSaAcSdAqFZ7Bt3Ga0B5HUj6w/MfdHdme4LzjxhBhuiHQfxzovaFCMR4YNV0zBt3CKONvwAAnid57ytwVhdFn2GDmr9YckuNTmtQAAKBERFClEREIWMvywNnhcxw1FOzge45rklrgdE90bhRzTQ/VduWj41uMuHTRirmjMD7w+o+qZWbNCE+477Xcj85FJ7XkvHh+Iz7m8x5bsxvWgoSqEqJK0qyQxXUsA2xklkZGCNqEua9u/Nxc13YQfEFbMuGWW1yQu24pHxvGjmmh/uORyXjfOJbwmaYprS90TsqARxhw4O2AK9hySKZsx5il7SKE11wr1Wnk7VYIQY8G8BT0NOnqp49vgWy2vcx21DHSKIjQtbq4cauLjXhRa4iJlDhhjA0ZBcUR5e4uOqqqqiqvUBeSKSiishVRURWAQqoqIrBCLKYZvQ2O1w2ip2WOpIBXON2TxTfkSe0BYtUqpc0OBa7IqzXFpDhmF9JwSte1r2ODmOAc1wNWlpFQQeCwmN7wjs9htBeQDKx0Mbd7nyNLQAN9KknkCuPXVia22RuxBaHsZrsEMkYK60DwQO5Wl6XtaLU8PtEz5HDIbVKAHUNaMm9wSSFYz2xQXOF0GutdnpxTh9ptLMG48grNUKKBWiSdTY0uIa0VJNAN5J0C65gq5OiY1tM/eeeLjqfl3LUcD3GXuE7x/xj1d8h38l1+7LKI2DiVmrXnPEd4LMhnt8t3XYntny9xviOzOWz56K7a2gA4KSIkqYoiIhCIiIQi8rREHtIK9UQhcuxZcBic6Vjeoc3tG48Ry9PTViu422yiVpBAquY4lw46FxfG0mPVzd7eY/zJPbPtAGkKKcdD7H24Z55y07MIJjQRtHuPcaZjDLWioSsDhQ6KRKoU7okI8wsRPCWGh03Feay0jA4UKxs0RaaHTcV4uZTJd0OJewOagioilelFJURFKhERFdCIiKykKioiKylFFEVwpVCVnMNXG60vDnD7Npz/EfhHLiVTD9wPtLg5wLY+O93Icua63cFytY1vVDWtFANBRJ7StLw6woR+rU/2/OmGW1M5KSv0e/LQefx12Z3NxXWGAEigGgWeUWtAFBopLMp0iIiEIiIhCIiIQiIiEIre1WVsgodeKuEQhc3xHhM1L4hsu1I0B7OBWlTxOY4te0tI1ByK7zLGHChFVrt9YbjmBq0O4HQjsKaSlpvhfTE+ocx338aJTOWUyKb8P6Xcj23cFyIlQkaHChWyXphWaIkx/aDgcnfQrXpWFpo4EU3EEHwK0EGYhRxWGa9RtGaQRpaLANIgp045LGSxlp9CoK/e0EUKs5GFp9Cpc2iux17NRRURSF6UREVFZRRFVKqKtRSqqKk0EmgBJOgGZKzd2YYnmILh0bTuObvDd3qsWPDgisRwH5oMzuXrChPimjBVYRjS4gAEk5ADMnsC2zD+EnOIfOOYj+v0W1XBhNkVNlnW3vOZPfu7lulhu1sYFRmkE5a7olWwfpHnqe3XYnEvZ7WfVExPlp89Fj7nuUMAJFANyzzWgCg0UkSZMUREQhEREIRERCEREQhEREIRERCEREQhW81kY/ULB3jhxkgza1w5gH/AOLZEUgkGoRSuBXMLfgluextM5e83zz81gbXhKYVALXjvB/zvXa3MB1AK8JLFG77q7YdpTLML1duPzzXE+z5d+N2myo+OS4HNh+1NP6lxHEFp9CrZ112gawSf+riu+SXRGV4uuJnJdDbYijNo5915Gy4Wjjy7LhAuy0H9hJ4O+i9o7jtLtIXd+y31K7f/wDgs5L0bcjBwVjbMXRo590Cy4f9x5dlxmz4TtDtdlo7S4+Q+azVhwMMukLnch1G/XzXVI7sjG5XLLOxujQuaJacy/8AdTYKc8+a92SMBv7a7cVpt14UZH7kbW8TTM9p1K2KyXOxmqyqLhJJNTmuoAAUCgxgbkBRTRFClEREIRERCEREQhEREIRERCEREQhEREIRERCEREQhEREIRERCEREQhEREIRERCEREQhEREIRERCEREQhEREIX/9k=',h3:'Trusted Auther'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaIJefkARpX9yPjLv_WLWL6BrbnjWLS7iCV_QnOMx0qMvvSJx4wHCYsFYidOdhd5sg9hQ&usqp=CAU',h3:'Reusable Element'}]
  return (
    <div className='featuremain'>
        <h1> Our Features</h1>
        <div>
            <div className='data'>
               {arrdata.map((ele)=>{
                return(
                    <div className='middleData' >
                    <img src={ele.img} alt=' ' style={{borderRadius:'50%',width:'30px',height:'30px'}}></img>
                    <h3>{ele.h3}</h3>
                    <p className='featurep'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate soluta esse voluptatem vero.</p>
                    <button className='btn123'>Readmore</button>
                    </div>
                    
                )
               })}
            </div>
        </div>
        
    </div>
  )
}

export default Feature