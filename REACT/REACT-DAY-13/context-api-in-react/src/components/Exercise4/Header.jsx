
import { CartIcon } from "./CartIcon";

export const Header = () => {

  return (
    <>
      <header className="h-16 flex justify-between items-center p-2 text-sm shadow-md rounded-sm">
        <div>
          <img
            className="w-10"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAACUCAMAAACk7myLAAAAaVBMVEX///8AAADz8/Pw8PDr6+vZ2dn6+vpYWFjc3NxjY2Pl5eX29vZKSkrg4ODMzMxcXFyysrJvb2/Dw8OKioqnp6eYmJg/Pz+QkJDT09MuLi4VFRW9vb01NTUJCQlFRUWBgYF5eXkfHx8mJiYLq/5nAAAE6ElEQVR4nO2d23aqMBCG5SyIGE5RQEH7/g+5xWJbJAqtmWRmw3dt18r8JcOcElarhYWFhYWFhYUFdJjbQ1RtdK9CG2bE0rA0jLXuhWjCzs5H44ajeylasPPdyTBmrEDGv+yfpQJ2bfwk0L0e1biZ0Uf3glRjnY15KxD4jwLsdC9JLUMBjEz3mpRixQMBjK3uRanEbYYC8FkFxWwowLw2QSAQ4DSrTfAhUGA/p02QCwQoDrpXpZCgECiQu7qXpZBUIIA3Jy+wDocCfDDdq1KJyAucdS9KJbYgGuS6F6WUZOgHC0v3opTyWBQwjOO8akPWICOoI91rUsvWexAgnJkAq8NDROzNKRa8kfQFiG3dC1JOX4FZZcQd1bf5pad7MVq4K3Di8dxcYEe7C8qjd87/8yBgExyiK87QzwV5nrFk/TMX3qwTxrIrrIq2/0OSbCV5evZDfjxyL27y5LW3d9j+7HW9Y+NS75o0I/5+ZN/2dDGvF2fP4n4n98PLY4x4qf2cbLVgk/OBQbd9v0uGP7ZYWJwEv27dZOEL/gA/5v6JQTcVmt7/1Y12z3/7+eyQe1WYlagC/JOP/dZqC8KmnQhqBEN8WvGiM8ko3rCIxeWUn14pmanbrMm4ow/Anzg1VB4DS1T7k4JP461gpy9c4JuEFJ4CezAMIpMj/ijRFHTCZVLoNnAMF8wH3Il1mziCaBRALshjIwdcAOQBsitoAkql3CNvp+yBBaixt1QPolEAieBvJkxKBt4QAH1ECJMNfFGjH7XegAaDRoH/zImgES4T3G/BFuBoMNdt3zjretyMv+MRqI4k42a8Afr3IHRO2BB4BISDkbI44XeD13gQUACjQZ4N3BiOREkEezrQ4kJGxCGF3qE7ter/F84URu1NQAGMvW7rpgBZHKIxaA1ZH+QU3IBwRFwWIfq0uAXyVUAhJ1itxvr/77DD3ye68jgfLBNft3GTgCyTLwrQ2AWLApAKeBQyQ1AF8PcJWiDfhsi7xR3DOyTkUZI4dyA6OyuNVLd1UwAtEcUUXCForZxTcAQ2pAIkDiCB1ogMn0B+vLmASlDptm8cFzIgoOELgecICTSNqnEr3oHABU1rWAUIREU2B5YA/T6AnqgmcGcl+ERxgV2CCFoB9H0DwSWLsvFwn06GP1mAfqy2gmygdxxR50gO9Gh9S4m6eQBaJ/rigriXzi5KJDB4gjVEtiGbhz3OWFNF8LDwDtoLHKHPmNy54H0pKtoGiC9ugj9teANzUKBEgBrzZBVo4+QO7mKJAgGQN1IVPATIj15b4C/EEvcjoOAhQJ0atQTQGSL+gRLgmIDA501EdzBLhMKELejxY8zh4DeAtxCEWNPiPnDOsETfOOqooK5kSrEWhwYAVQwJfdjBBXGGNM4bdYg+0PM2jW6rfgXAQAWBWOgnrnRXUNBxAp/YshupBMbJHnDk3klB4BaOAclx3K7JNFg7BC/J5DWTY+TDE8+QNlEQ4h6deIGkHImuANen4OVGKAvO65rz4vJSANofN8meukPun/PK2QZ24ERZGntPtYqpBQIPJMJUmTdZ1G/+rdle3HXEfifjOOvh9cU+O4jS3DVrBtthRykbeoYZ9SqHPI+etn4th/VCyZDh7RL/CtNJu12+yxzrdWxj2kn6OaJc5wfyG+Anm61DNKpZWFhYWFiYA/8At/ZLRNMDCU4AAAAASUVORK5CYII="
            alt=""
          />
        </div>
        <div>
          <nav className="flex lg:gap-16 gap-8 text-semibold">
            <a href="#">About</a>
            <a href="#">Products</a>
            <a href="#">Buy Now</a>
          </nav>
        </div>
        <div>
          <CartIcon />
        </div>
      </header>
    </>
  );
};
