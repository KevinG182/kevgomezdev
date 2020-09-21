---
title: 'MIPS Assembly Processor Implemented in FPGA'
group: 'CMPE 140: Computer Architecture Design'
date: '2020-05-14'
---
![BASYS](/images/basys-board.jpg)

This project is part of **CMPE 140: Computer Architecture Design** course and has students collaborate in teams of 4 to design a MIPS assembly processor with a factorial accelerator interfaced with the GPIO module. The five-stage MIPS processor pipeline included fetch, decode, execute, memory and writeback stages.

![Five Stage Pipeline MIPS Processor](/images/five-stage-pipeline.png)

Roles Included:
- Designed a **32-bit 5-stage pipelined** MIPS Assembly Processor on a Xilinx BASYS 3 Artix-7 FPGA Board with system building blocks, data paths, control units, system RTL design in **Verilog** and outlined in detailed schematic
- Performed **functional verification and hardware validation** using self-checking testbenches and simulations
- Completed FPGA implementation of **system-on-chip (SoC)** integrating MIPS Processor with a factorial accelerator and **general-purpose IO unit,** directly interfaced through the MIPS local bus, using memory-mapped interface registers

| ![Example Waveform](/images/example-waveform.jpg) |
|:--:|
| *Example Waveform of Testbenches* |
