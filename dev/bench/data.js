window.BENCHMARK_DATA = {
  "lastUpdate": 1678809891251,
  "repoUrl": "https://github.com/inspektor-gadget/inspektor-gadget",
  "entries": {
    "Gadget benchmarks": [
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "0cc1e1ffbc1a57b6bb7abf2c8b86ccf7034707d1",
          "message": "CI: benchmarks all gadgets and publish graphs",
          "timestamp": "2023-03-14T03:17:17Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1438/commits/0cc1e1ffbc1a57b6bb7abf2c8b86ccf7034707d1"
        },
        "date": 1678809891005,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 168775428,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2040468,
            "unit": "ns/op",
            "extra": "604 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 35996997,
            "unit": "ns/op",
            "extra": "38 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 21730442,
            "unit": "ns/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 54880625,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 136342444,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 196209519,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 29434,
            "unit": "ns/op",
            "extra": "41226 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 169551443,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 265088924,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 136332947,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 271123194,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 168932631,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 843095442,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 100972359,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 472477478,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 157098488,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 539159,
            "unit": "ns/op",
            "extra": "2318 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 60780968,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 154319205,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 86535739,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 839640436,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 546901648,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 246440562,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 68587813,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 23166656,
            "unit": "ns/op",
            "extra": "92 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 52691701,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 147282106,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 167884600,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 353739539,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 174475882,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 265339956,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 138706836,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 271689095,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 166433111,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 869021528,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 98800668,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 481173997,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 154432433,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18631788,
            "unit": "ns/op",
            "extra": "57 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 57341454,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 157326880,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 85713974,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 920688084,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 553102182,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 253920022,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 362391515,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 22319094,
            "unit": "ns/op",
            "extra": "88 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 53861508,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 150512536,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 173731862,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3386510306,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 167166327,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 257448425,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 132824049,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 271870974,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 166542224,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1183138952,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 99932401,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 489961363,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 158029468,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 165644164,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 58461274,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 156850630,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 86609778,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1613838040,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 535733094,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 254447003,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3347628648,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 22061298,
            "unit": "ns/op",
            "extra": "94 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 53368654,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 143407139,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 175689591,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 35336257981,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 173323196,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 268510554,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 135747224,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 278272759,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 172068663,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4056124485,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 102767232,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 485586507,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 154757588,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1665749536,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 60106428,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 157700717,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 86336480,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8346566489,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 545534011,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 261050598,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      }
    ]
  }
}