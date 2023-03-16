window.BENCHMARK_DATA = {
  "lastUpdate": 1678968235330,
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
          "id": "9af8f354362d794b1ac1a1ca7958dff0c716c58a",
          "message": "docs: benchmarks",
          "timestamp": "2023-03-15T16:16:18Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1442/commits/9af8f354362d794b1ac1a1ca7958dff0c716c58a"
        },
        "date": 1678897867849,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 199501082,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2467346,
            "unit": "ns/op",
            "extra": "508 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 42527457,
            "unit": "ns/op",
            "extra": "32 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 20629212,
            "unit": "ns/op",
            "extra": "82 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 57176464,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 174510438,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 204773881,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 37912,
            "unit": "ns/op",
            "extra": "33327 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 206827825,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 281851308,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 150160621,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 296422088,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 185596483,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 912648687,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 107131113,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 518313444,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 163879712,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 610553,
            "unit": "ns/op",
            "extra": "2046 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 62782894,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 161010722,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 97087307,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 936635328,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 600013380,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 275526790,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 75905632,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 20551593,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 56165200,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 170044129,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 209264185,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 406890535,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 205636172,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 288818084,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 145741824,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 305676191,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 182608607,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 954230038,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 105940078,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 508558185,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 161421184,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18098126,
            "unit": "ns/op",
            "extra": "78 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 62371079,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 165567394,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 97621428,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1052151914,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 597886298,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 271965441,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 360708974,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 21851858,
            "unit": "ns/op",
            "extra": "79 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 58247992,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 172880623,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 211001007,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4316482097,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 208359856,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 277397554,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 150620503,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 299437113,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 184543447,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1297825264,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 108893842,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 517584558,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 163606626,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 168289130,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 62080586,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 164327982,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 96645475,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1796252051,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 586855072,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 272710218,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3287686853,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 19726002,
            "unit": "ns/op",
            "extra": "78 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 54465111,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 173582800,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 204242260,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 41567826866,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 208516173,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 277879036,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 151040714,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 304876330,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 189774558,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4473743631,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 106268242,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 511293061,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 167058888,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1692595480,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 61518262,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 166121358,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 100122056,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 9463288581,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 592220800,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 272821085,
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
          "id": "ad9df75e47f53dd3a4cae818a8ff9df8bb31efa5",
          "message": "runtime/local: Move context and timeout management from runtime to tracers",
          "timestamp": "2023-03-15T16:16:18Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1408/commits/ad9df75e47f53dd3a4cae818a8ff9df8bb31efa5"
        },
        "date": 1678898837898,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 212463551,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2414899,
            "unit": "ns/op",
            "extra": "486 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 44816344,
            "unit": "ns/op",
            "extra": "33 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 22814886,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 57981861,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 171446484,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 205927724,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 37264,
            "unit": "ns/op",
            "extra": "32028 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 242606340,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 160596530,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 144680925,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 275341649,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 192696673,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 895487179,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 112820250,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 518674122,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 172606880,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 666493,
            "unit": "ns/op",
            "extra": "1713 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 62125486,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 168924940,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 103322917,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 895077994,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 591922000,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 259666236,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 77602461,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 21184777,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 58658704,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 167993112,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 221792092,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 475137679,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 255347701,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 159402915,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 146596828,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 288760921,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 201346619,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 914500501,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 110765826,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 489794600,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 173592508,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 17410412,
            "unit": "ns/op",
            "extra": "82 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 59782923,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 168217051,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 102880303,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1016769548,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 579235794,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 251878142,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 396336790,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 20339892,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 58767322,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 160558375,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 216089208,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4528133272,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 222586978,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 156903470,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 146557810,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 283105373,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 197363092,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1196389428,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 112865989,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 504120265,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 172028183,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 166103096,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 64685405,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 173866258,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 101056389,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1789604817,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 574724212,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 254424636,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3337680828,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 20446732,
            "unit": "ns/op",
            "extra": "69 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 56669206,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 153269878,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 228793572,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 45802912233,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 224056542,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 160403263,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 140896161,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 295143993,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 189871785,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4538703889,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 111987994,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 512368767,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 172591406,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1651194596,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 60185440,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 162357345,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 102896496,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 9609355302,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 556531662,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 243964605,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
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
          "id": "e5ffbee96dafaecd7f72792d1b0fc1be4fb298b2",
          "message": "docs: benchmarks",
          "timestamp": "2023-03-15T16:16:18Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1442/commits/e5ffbee96dafaecd7f72792d1b0fc1be4fb298b2"
        },
        "date": 1678900235419,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 163140080,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2009624,
            "unit": "ns/op",
            "extra": "613 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 35313806,
            "unit": "ns/op",
            "extra": "40 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 21201548,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 53461212,
            "unit": "ns/op",
            "extra": "26 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 142931928,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 169584249,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 28678,
            "unit": "ns/op",
            "extra": "40839 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 169256977,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 260094844,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 134570160,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 270465048,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 171141831,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 830675498,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 102169614,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 470200800,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 154516338,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 533467,
            "unit": "ns/op",
            "extra": "2379 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 59927691,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 158771953,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 86935143,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 833374614,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 529339892,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 249264334,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 67071979,
            "unit": "ns/op",
            "extra": "18 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 21781977,
            "unit": "ns/op",
            "extra": "98 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 53581073,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 143854249,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 172099387,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 351880002,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 173009745,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 265476866,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 136474024,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 265756720,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 169431814,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 871229749,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 100300726,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 473463453,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 154035586,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18302985,
            "unit": "ns/op",
            "extra": "78 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 59438291,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 156340949,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 87337313,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 912011127,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 544744547,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 251182969,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 363808634,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 22054214,
            "unit": "ns/op",
            "extra": "96 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 55531604,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 145668721,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 166838159,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3448261589,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 170903715,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 269956019,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 135171171,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 274240188,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 170269811,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1179839738,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 102037699,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 475555537,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 151540634,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 169409968,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 60306284,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 151420319,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 91768257,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1594689318,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 539376750,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 252633665,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3290144788,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 20979841,
            "unit": "ns/op",
            "extra": "94 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 54270851,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 148206366,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 174310930,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 34556633933,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 171834235,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 266763416,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 140734127,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 276183474,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 168705485,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4063847051,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 99044035,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 483658606,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 152063219,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1671152150,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 60182655,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 155263825,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 87974125,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8368457553,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 539042833,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 249475277,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
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
          "id": "a8b52a56b464195e3974c1af099f61cfcff03fff",
          "message": "runtime/local: Move context and timeout management from runtime to tracers",
          "timestamp": "2023-03-15T16:16:18Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1408/commits/a8b52a56b464195e3974c1af099f61cfcff03fff"
        },
        "date": 1678902307684,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 145346000,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1969555,
            "unit": "ns/op",
            "extra": "642 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 34316891,
            "unit": "ns/op",
            "extra": "42 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 22442641,
            "unit": "ns/op",
            "extra": "92 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 49958731,
            "unit": "ns/op",
            "extra": "25 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 137166135,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 150909411,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 30166,
            "unit": "ns/op",
            "extra": "42616 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 151790293,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 132474273,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 134041684,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 258682334,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 153839866,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 828100383,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 94616555,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 458978932,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 150824700,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 369377,
            "unit": "ns/op",
            "extra": "3348 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 55061396,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 151608626,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 84381615,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 826321330,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 529048654,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 244543548,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 67430307,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 22688433,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 49413799,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 133641451,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 153402426,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 320454362,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 156215004,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 136293220,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 131823132,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 257827001,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 160590281,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 859184280,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 93217087,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 455488812,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 149142480,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18641334,
            "unit": "ns/op",
            "extra": "54 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 56187988,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 151346746,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 88830805,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 913647192,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 520320021,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 246556815,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 362933082,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 23161909,
            "unit": "ns/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 50142294,
            "unit": "ns/op",
            "extra": "26 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 135597547,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 153913626,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3186948943,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 154839332,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 133522972,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 130174710,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 273288255,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 159200816,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1139881630,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 92774689,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 462661230,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 151179872,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 167954523,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 55776919,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 150475044,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 83961588,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1528811646,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 530056380,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 247339573,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3295993662,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 22260684,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 49664064,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 136432260,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 152542321,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 30977358209,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 156068491,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 132279070,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 130604767,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 269551820,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 160677249,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 3927546948,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 91736612,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 468057705,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 154387454,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1666534478,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 56862169,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 150102621,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 83707537,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 7899532291,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 525870726,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 246703046,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
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
          "id": "1694371d04c7120588ffc0688130823c9d1003b1",
          "message": "docs: benchmarks",
          "timestamp": "2023-03-16T02:46:52Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1442/commits/1694371d04c7120588ffc0688130823c9d1003b1"
        },
        "date": 1678968234698,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 209858757,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2465152,
            "unit": "ns/op",
            "extra": "522 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 45105332,
            "unit": "ns/op",
            "extra": "28 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 22615041,
            "unit": "ns/op",
            "extra": "79 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 56885890,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 205825731,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 215293154,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 35780,
            "unit": "ns/op",
            "extra": "32863 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 224146523,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 282878735,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 149999709,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 303268857,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 185091785,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 934217502,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 108576176,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 512473072,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 164921273,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 587058,
            "unit": "ns/op",
            "extra": "2112 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 64108887,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 167309188,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 103768101,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 936647976,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 594842902,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 271990476,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 76164017,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 21266110,
            "unit": "ns/op",
            "extra": "68 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 57852224,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 176949169,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 218809874,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 419852564,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 224091960,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 278094192,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 149443016,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 298817383,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 192052534,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 1003828664,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 107728214,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 515863988,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 172625602,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18096687,
            "unit": "ns/op",
            "extra": "69 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 63471679,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 167719137,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 101437183,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1046117348,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 606983882,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 273802358,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 368196579,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 21153153,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 57479826,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 175309774,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 223924522,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4462899694,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 234311063,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 289622239,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 150792332,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 314147242,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 196157877,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1246505924,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 106745054,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 525117206,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 169213656,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 166933518,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 63938993,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 167086012,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 101014096,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1839487453,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 617489540,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 279416038,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3258010290,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 23408483,
            "unit": "ns/op",
            "extra": "70 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 57426843,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 173417975,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 221116720,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 44092484217,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 218562814,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 286978284,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 151519951,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 296589833,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 187418133,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4423544580,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 105208046,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 516278404,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 165744399,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1653983536,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 62679131,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 168973841,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 104114311,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 9619147773,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 611094342,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 277245611,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      }
    ]
  }
}