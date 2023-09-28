SMALL TEST WITH ZK-PROOF

INSTALL:
`curl -LSfs get.zokrat.es | sh`

COMPILE circuit folder:
`zokrates compile -i factor.zok`

SETUP: 
With zokrates has already entropy.It generate proving.key and verification.key
provingkey must be keep secret. It's used for create the proof
`zokrates setup`

EXECUTE PROGRAM:
I pass i 3 example agrs to circuits
`zokrates compute-witness -a 7 13 91`

EXECUTE PROGRAM:
`zokrates generate-proof`

EXPORT VERIFIER:
`zokrates export-verifier`
`zokrates verify`

ZK-PROOF:
a,b,c are maths relations.Its needed for check if the proof is true
inputs: array of public inputs

ZOKRATES INPUT:
Private and Public:
If private are keept secrets during the proof generation
If witness is compromised i could get the real input


