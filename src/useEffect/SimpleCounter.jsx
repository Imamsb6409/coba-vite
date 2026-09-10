import { Button, Flex } from "@radix-ui/themes";
import { Toast } from "radix-ui";
import React, { useState, useEffect } from "react";

function SimpleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // kode yg akan berjalan ketika count berubah
    // setTimeout() untuk menjalankan kode setelah beberapa waktu
    setTimeout(() => {
      console.log(`nungguin yaa`);
    }, 5000);
    // cleanup function(opsional) gunanya untuk menghentikan useEffect dipake ketika component di unmount, atau pas make setTimeout
    return () => {
      clearTimeout();
    };
  }, [
    // kalo kosong dia render sekali doang pas awal refresh
    count,
  ]);

  return (
    <>
      <Flex direction="column" gap="2">
        <p>Count: {count} </p>

        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </Button>
        <Button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </Button>
      </Flex>
    </>
  );
}

export default SimpleCounter;
