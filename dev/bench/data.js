window.BENCHMARK_DATA = {
  "lastUpdate": 1678881291565,
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
      },
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
          "id": "f181148026c3b1104c0c0dc2f3c3a7f37473eeec",
          "message": "[RFC] New generic benchmarks measuring ebpf execution",
          "timestamp": "2023-03-14T03:17:17Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1441/commits/f181148026c3b1104c0c0dc2f3c3a7f37473eeec"
        },
        "date": 1678820178755,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 204497568,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2592249,
            "unit": "ns/op",
            "extra": "481 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 47215044,
            "unit": "ns/op",
            "extra": "28 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 22348968,
            "unit": "ns/op",
            "extra": "72 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 54444224,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 154007907,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 199739619,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 37114,
            "unit": "ns/op",
            "extra": "33084 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 209369386,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 288980593,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 137248740,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 275973930,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 182717852,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 876655388,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 109880031,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 514541671,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 163608142,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 622388,
            "unit": "ns/op",
            "extra": "1874 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 62012971,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 168856065,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 98538483,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 902070330,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 585878010,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 242462807,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 74345333,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 20680275,
            "unit": "ns/op",
            "extra": "81 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 53565510,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 157730759,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 206692105,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 443705983,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 203403700,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 277431737,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 138627442,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 284955510,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 188672557,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 895319331,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 112417072,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 495131412,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 163254312,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18546460,
            "unit": "ns/op",
            "extra": "67 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 60485207,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 168676257,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 98457293,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 959646908,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 561216503,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 248163180,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 379302953,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 20892319,
            "unit": "ns/op",
            "extra": "75 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 55427501,
            "unit": "ns/op",
            "extra": "25 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 163775774,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 213632665,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4197627293,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 209600917,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 274153483,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 140141474,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 285371055,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 186165061,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1215980858,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 114887617,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 507687646,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 162431552,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 167293396,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 60477837,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 164386717,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 97154122,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1711488291,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 548845586,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 245472875,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3297480772,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 22855876,
            "unit": "ns/op",
            "extra": "84 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 53384097,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 154454005,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 216742734,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 41752835440,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 198343588,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 299100910,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 154790726,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 279555870,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 184215126,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4323923939,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 111653057,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 536292122,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 161946798,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1706579183,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 60171810,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 166569078,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 96392000,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 9543285058,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 583633250,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 250515061,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/-traceloop",
            "value": 1032201942,
            "unit": "ns/op\t     22839 ebpfexec/op\t  10332700 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/advise-seccomp",
            "value": 1003581727,
            "unit": "ns/op\t      2360 ebpfexec/op\t   1441900 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/audit-seccomp",
            "value": 1039619846,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/profile-cpu",
            "value": 1146399562,
            "unit": "ns/op\t       192.0 ebpfexec/op\t    356100 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/snapshot-process",
            "value": 1003028214,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/snapshot-socket",
            "value": 1002391213,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/top-ebpf",
            "value": 1002964314,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/top-file",
            "value": 1080226133,
            "unit": "ns/op\t       107.0 ebpfexec/op\t    125700 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/top-tcp",
            "value": 1069514529,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-bind",
            "value": 69892,
            "unit": "ns/op\t         2.000 ebpfexec/op\t     10343 ebpfns/op",
            "extra": "18735 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-capabilities",
            "value": 1070346100,
            "unit": "ns/op\t     76717 ebpfexec/op\t  19363100 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-dns",
            "value": 1415561233,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-exec",
            "value": 1064134684,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-fsslower",
            "value": 1269284425,
            "unit": "ns/op\t        52.00 ebpfexec/op\t     41900 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-mount",
            "value": 1105128041,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-network",
            "value": 1016501490,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-oomkill",
            "value": 1035195901,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-open",
            "value": 46834,
            "unit": "ns/op\t         2.007 ebpfexec/op\t      9526 ebpfns/op",
            "extra": "23504 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-signal",
            "value": 1031452509,
            "unit": "ns/op\t        22.00 ebpfexec/op\t    218300 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-sni",
            "value": 1416154536,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-tcp",
            "value": 1253955328,
            "unit": "ns/op\t        32.00 ebpfexec/op\t    235800 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-tcpconnect",
            "value": 1134563126,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      },
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
          "id": "8cd51c3068b9f25b5e36541bb4f215120db2f07e",
          "message": "CI: benchmarks all gadgets and publish graphs",
          "timestamp": "2023-03-14T22:00:37Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1438/commits/8cd51c3068b9f25b5e36541bb4f215120db2f07e"
        },
        "date": 1678879153236,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 189385823,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2454089,
            "unit": "ns/op",
            "extra": "540 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 41997066,
            "unit": "ns/op",
            "extra": "33 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 21639141,
            "unit": "ns/op",
            "extra": "73 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 57194034,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 160929049,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 201663840,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 37562,
            "unit": "ns/op",
            "extra": "32430 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 197805598,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 273286840,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 140451616,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 273792032,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 178568217,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 880957221,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 104607915,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 499836509,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 160723402,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 607870,
            "unit": "ns/op",
            "extra": "2055 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 58996953,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 165500817,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 97195852,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 853164946,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 548938036,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 245373087,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 72277931,
            "unit": "ns/op",
            "extra": "18 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 20153190,
            "unit": "ns/op",
            "extra": "80 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 52456400,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 156281780,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 195369450,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 412731001,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 206188112,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 277279772,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 144218501,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 262384058,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 182220568,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 908789428,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 106003394,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 500061861,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 162176898,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18394091,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 61369723,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 160969974,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 97517688,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 966389935,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 571962116,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 258944256,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 372592980,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 21328473,
            "unit": "ns/op",
            "extra": "86 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 56735272,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 156993104,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 197740051,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4172558321,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 207413150,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 274402968,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 141896593,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 274304603,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 184294409,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1242019533,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 105009114,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 511056338,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 168073869,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 181349807,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 58919373,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 160734707,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 97535878,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1761795033,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 558333048,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 244339636,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3330544178,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 21949800,
            "unit": "ns/op",
            "extra": "62 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 55196228,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 154467295,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 207206366,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 41529232381,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 210801800,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 277151103,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 146377456,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 282310325,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 180076588,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4315953869,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 108940150,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 504282050,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 165651436,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1712487078,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 63010148,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 163760823,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 100615815,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 9629828039,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 568669648,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 240605352,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "albancrequy@microsoft.com",
            "name": "Alban Crequy",
            "username": "alban"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "901c9d58d23ebaaaf28801c2b626732d1b4f5933",
          "message": "Merge pull request #1419 from alban/alban_benchmarks\n\nCI: benchmarks all gadgets and publish graphs",
          "timestamp": "2023-03-15T12:50:06+01:00",
          "tree_id": "6ddb7f7a9915718b5aab01e00f109ff8576de6f1",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/commit/901c9d58d23ebaaaf28801c2b626732d1b4f5933"
        },
        "date": 1678881290973,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 216200218,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2368288,
            "unit": "ns/op",
            "extra": "537 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 42299567,
            "unit": "ns/op",
            "extra": "33 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 20279197,
            "unit": "ns/op",
            "extra": "82 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 59104868,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 173423670,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 207547524,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 34504,
            "unit": "ns/op",
            "extra": "32348 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 204756062,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 285539640,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 149884853,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 301398742,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 185541192,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 937484990,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 107929230,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 521015986,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 170965519,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 604609,
            "unit": "ns/op",
            "extra": "2036 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 62260598,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 170016129,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 99241187,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 942219130,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 607952233,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 272288326,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 74714067,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 23028480,
            "unit": "ns/op",
            "extra": "79 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 58312278,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 170390242,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 217857186,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 416874099,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 220831744,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 283676248,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 148243538,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 300888124,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 186423567,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 970879135,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 107596141,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 520424316,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 183764962,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 17763540,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 61966675,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 159857679,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 102443888,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1056793927,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 603927762,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 272150365,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 355188465,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 20944247,
            "unit": "ns/op",
            "extra": "78 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 58429815,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 174256940,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 210649843,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4079224685,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 204478799,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 289567501,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 151981954,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 300455164,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 181223821,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1305560665,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 108404056,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 539964757,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 167757055,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 167122362,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 63119080,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 165923364,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 99031691,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1797881111,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 615624306,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 274293531,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3311545273,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 22796527,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 58049255,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 182960311,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 222169743,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 41402886474,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 208226805,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 280882430,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 148785842,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 305565332,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 185710383,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4389346668,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 106020619,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 516667240,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 167382609,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1651254262,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 61944791,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 160535786,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 99343433,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 9622176055,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 604630355,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 273794394,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      }
    ]
  }
}