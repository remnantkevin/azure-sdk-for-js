let nock = require('nock');

module.exports.hash = "5df4118f82f6d2e41a288ec76ce9fd04";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fattest.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '1a3305da-386d-4958-8c86-7e0336262400',
  'x-ms-ests-server',
  '2.1.11774.11 - SCUS ProdSlices',
  'Set-Cookie',
  'fpc=AiWs8x1H8-VOg1AFk9msOO681LWYAwAAAMOGP9gOAAAA; expires=Fri, 25-Jun-2021 00:01:12 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Wed, 26 May 2021 00:01:12 GMT',
  'Content-Length',
  '1317'
]);

nock('https://shareduks.uks.attest.azure.net:443', {"encodedQueryParams":true})
  .post('/attest/SgxEnclave', {"quote":"AwACAAAAAAAFAAoAk5pyM_ecTKmUCg2zlX8GBzjYw_MajuE9ZL-H7e0TEmsAAAAAEREDBf-ABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAHAAAAAAAAALd5ICYYvstjZ2jl2QLyjVJCInNfr7U56pugfD_BcaHCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsGkSVKuggcTXGwpt1uMApNy7pS2d-FcIL1CNA8Q1BqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADtEanrl9_BcFOjKmmS5x0E9-yZbkVRmrcQk2r7SPkEHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBAAAHiK_9eM4mysUys-8hg4EJ4xHarrEHTwqW5M0C0iCllBQjMs3LLvwaZvksTvtQhXJ7axqjvt04aLPfA_Z_mOEQTmKi-A-HLr5CDwlCSp7xckjoHlmVax-rcTu70S8ftlnfcyKFPtoz6xdxri73Yvw4iGkzZx8mC45IBLdDilHg11EREDBf-ABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFQAAAAAAAAAHAAAAAAAAAD-wrOCGnS4w8o6G1wx2ZAOlT7vNZY7s4OG5SKkVWRdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMT1d115ZQPpYTf3fGioKaAFasje1wFAsIGwlEkMV7_wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP2s6YC76NJJ_UECP9wLSa7tgKfHhCiwPvzKPexBfzUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfkC7wln92leIthoTVO3IaMbPR20Vlrt4aihEZNDOgkm5HxeP7NS_IIoTgAHLSlqN8TyU4ZJQe4miJ-Kwk0CGDiAAAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8FAMgNAAAtLS0tLUJFR0lOIENFUlRJRklDQVRFLS0tLS0KTUlJRWZ6Q0NCQ2FnQXdJQkFnSVVGTnFKdlllNThleWlSMjZjN3QvaXFTSk1icU13Q2dZSUtvWkl6ajBFQXdJdwpjVEVqTUNFR0ExVUVBd3dhU1c1MFpXd2dVMGRZSUZCRFN5QlFjbTlqWlhOemIzSWdRMEV4R2pBWUJnTlZCQW9NCkVVbHVkR1ZzSUVOdmNuQnZjbUYwYVc5dU1SUXdFZ1lEVlFRSERBdFRZVzUwWVNCRGJHRnlZVEVMTUFrR0ExVUUKQ0F3Q1EwRXhDekFKQmdOVkJBWVRBbFZUTUI0WERUSXhNRFF5TVRJd05Ua3pPRm9YRFRJNE1EUXlNVEl3TlRregpPRm93Y0RFaU1DQUdBMVVFQXd3WlNXNTBaV3dnVTBkWUlGQkRTeUJEWlhKMGFXWnBZMkYwWlRFYU1CZ0dBMVVFCkNnd1JTVzUwWld3Z1EyOXljRzl5WVhScGIyNHhGREFTQmdOVkJBY01DMU5oYm5SaElFTnNZWEpoTVFzd0NRWUQKVlFRSURBSkRRVEVMTUFrR0ExVUVCaE1DVlZNd1dUQVRCZ2NxaGtqT1BRSUJCZ2dxaGtqT1BRTUJCd05DQUFROApTZXU1ZXhYK28wY2RyWGR4S0cwYS9BdHN2dWU1U2hQWmY4eDBrZzNzTFIzYTlPNUdZZjBxbVdKSm0vRzhvNnJWCm9tUjY2aHdwUlc2WmpKb2hxd29PbzRJQ216Q0NBcGN3SHdZRFZSMGpCQmd3Rm9BVTBPaXEyblhYK1M1SkY1ZzgKZXhSbDBOWHlXVTB3WHdZRFZSMGZCRmd3VmpCVW9GS2dVSVpPYUhSMGNITTZMeTloY0drdWRISjFjM1JsWkhObApjblpwWTJWekxtbHVkR1ZzTG1OdmJTOXpaM2d2WTJWeWRHbG1hV05oZEdsdmJpOTJNaTl3WTJ0amNtdy9ZMkU5CmNISnZZMlZ6YzI5eU1CMEdBMVVkRGdRV0JCUXNueFZ6WFVaeHBGR3lhS1d3OFZmZ05lcGNwekFPQmdOVkhROEIKQWY4RUJBTUNCc0F3REFZRFZSMFRBUUgvQkFJd0FEQ0NBZFFHQ1NxR1NJYjRUUUVOQVFTQ0FjVXdnZ0hCTUI0RwpDaXFHU0liNFRRRU5BUUVFRUR4Qjh1Q0FNVTRubDVmUEVqS3F0bzB3Z2dGa0Jnb3Foa2lHK0UwQkRRRUNNSUlCClZEQVFCZ3NxaGtpRytFMEJEUUVDQVFJQkVUQVFCZ3NxaGtpRytFMEJEUUVDQWdJQkVUQVFCZ3NxaGtpRytFMEIKRFFFQ0F3SUJBakFRQmdzcWhraUcrRTBCRFFFQ0JBSUJCREFRQmdzcWhraUcrRTBCRFFFQ0JRSUJBVEFSQmdzcQpoa2lHK0UwQkRRRUNCZ0lDQUlBd0VBWUxLb1pJaHZoTkFRMEJBZ2NDQVFZd0VBWUxLb1pJaHZoTkFRMEJBZ2dDCkFRQXdFQVlMS29aSWh2aE5BUTBCQWdrQ0FRQXdFQVlMS29aSWh2aE5BUTBCQWdvQ0FRQXdFQVlMS29aSWh2aE4KQVEwQkFnc0NBUUF3RUFZTEtvWklodmhOQVEwQkFnd0NBUUF3RUFZTEtvWklodmhOQVEwQkFnMENBUUF3RUFZTApLb1pJaHZoTkFRMEJBZzRDQVFBd0VBWUxLb1pJaHZoTkFRMEJBZzhDQVFBd0VBWUxLb1pJaHZoTkFRMEJBaEFDCkFRQXdFQVlMS29aSWh2aE5BUTBCQWhFQ0FRb3dId1lMS29aSWh2aE5BUTBCQWhJRUVCRVJBZ1FCZ0FZQUFBQUEKQUFBQUFBQXdFQVlLS29aSWh2aE5BUTBCQXdRQ0FBQXdGQVlLS29aSWh2aE5BUTBCQkFRR0FKQnUxUUFBTUE4RwpDaXFHU0liNFRRRU5BUVVLQVFBd0NnWUlLb1pJemowRUF3SURSd0F3UkFJZ2NERkRkeXVQVEdFVE5GbkFTRDM4CkNZM1I2aUFESkRUdkFsdlNYM0h6SThrQ0lENmxWbUNaSVhQeTh6SkoxaC8ycnU2Mmx2VVVYMklpTWJtUU5QQTAKUHMwLwotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCi0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLQpNSUlDbHpDQ0FqNmdBd0lCQWdJVkFORG9xdHAxMS9rdVNSZVlQSHNVWmREVjhsbE5NQW9HQ0NxR1NNNDlCQU1DCk1HZ3hHakFZQmdOVkJBTU1FVWx1ZEdWc0lGTkhXQ0JTYjI5MElFTkJNUm93R0FZRFZRUUtEQkZKYm5SbGJDQkQKYjNKd2IzSmhkR2x2YmpFVU1CSUdBMVVFQnd3TFUyRnVkR0VnUTJ4aGNtRXhDekFKQmdOVkJBZ01Ba05CTVFzdwpDUVlEVlFRR0V3SlZVekFlRncweE9EQTFNakV4TURRMU1EaGFGdzB6TXpBMU1qRXhNRFExTURoYU1IRXhJekFoCkJnTlZCQU1NR2tsdWRHVnNJRk5IV0NCUVEwc2dVSEp2WTJWemMyOXlJRU5CTVJvd0dBWURWUVFLREJGSmJuUmwKYkNCRGIzSndiM0poZEdsdmJqRVVNQklHQTFVRUJ3d0xVMkZ1ZEdFZ1EyeGhjbUV4Q3pBSkJnTlZCQWdNQWtOQgpNUXN3Q1FZRFZRUUdFd0pWVXpCWk1CTUdCeXFHU000OUFnRUdDQ3FHU000OUF3RUhBMElBQkw5cStOTXAySU9nCnRkbDFiay91V1o1K1RHUW04YUNpOHo3OGZzK2ZLQ1EzZCt1RHpYblZUQVQyWmhEQ2lmeUl1Snd2TjN3TkJwOWkKSEJTU01KTUpyQk9qZ2Jzd2diZ3dId1lEVlIwakJCZ3dGb0FVSW1VTTFscWROSW56ZzdTVlVyOVFHemtuQnF3dwpVZ1lEVlIwZkJFc3dTVEJIb0VXZ1E0WkJhSFIwY0hNNkx5OWpaWEowYVdacFkyRjBaWE11ZEhKMWMzUmxaSE5sCmNuWnBZMlZ6TG1sdWRHVnNMbU52YlM5SmJuUmxiRk5IV0ZKdmIzUkRRUzVqY213d0hRWURWUjBPQkJZRUZORG8KcXRwMTEva3VTUmVZUEhzVVpkRFY4bGxOTUE0R0ExVWREd0VCL3dRRUF3SUJCakFTQmdOVkhSTUJBZjhFQ0RBRwpBUUgvQWdFQU1Bb0dDQ3FHU000OUJBTUNBMGNBTUVRQ0lDLzlqKzg0VCtIenRWTy9zT1FCV0piU2QrLzJ1ZXhLCjQrYUEwamNGQkxjcEFpQTNkaE1yRjVjRDUydDZGcU12QUlwajhYZEdteTJiZWVsakxKSytwenBjUkE9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCi0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLQpNSUlDampDQ0FqU2dBd0lCQWdJVUltVU0xbHFkTkluemc3U1ZVcjlRR3prbkJxd3dDZ1lJS29aSXpqMEVBd0l3CmFERWFNQmdHQTFVRUF3d1JTVzUwWld3Z1UwZFlJRkp2YjNRZ1EwRXhHakFZQmdOVkJBb01FVWx1ZEdWc0lFTnYKY25CdmNtRjBhVzl1TVJRd0VnWURWUVFIREF0VFlXNTBZU0JEYkdGeVlURUxNQWtHQTFVRUNBd0NRMEV4Q3pBSgpCZ05WQkFZVEFsVlRNQjRYRFRFNE1EVXlNVEV3TkRFeE1Wb1hEVE16TURVeU1URXdOREV4TUZvd2FERWFNQmdHCkExVUVBd3dSU1c1MFpXd2dVMGRZSUZKdmIzUWdRMEV4R2pBWUJnTlZCQW9NRVVsdWRHVnNJRU52Y25CdmNtRjAKYVc5dU1SUXdFZ1lEVlFRSERBdFRZVzUwWVNCRGJHRnlZVEVMTUFrR0ExVUVDQXdDUTBFeEN6QUpCZ05WQkFZVApBbFZUTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFQzZuRXdNRElZWk9qL2lQV3NDemFFS2k3CjFPaU9TTFJGaFdHamJuQlZKZlZua1k0dTNJamtEWVlMME14TzRtcXN5WWpsQmFsVFZZeEZQMnNKQks1emxLT0IKdXpDQnVEQWZCZ05WSFNNRUdEQVdnQlFpWlF6V1dwMDBpZk9EdEpWU3YxQWJPU2NHckRCU0JnTlZIUjhFU3pCSgpNRWVnUmFCRGhrRm9kSFJ3Y3pvdkwyTmxjblJwWm1sallYUmxjeTUwY25WemRHVmtjMlZ5ZG1salpYTXVhVzUwClpXd3VZMjl0TDBsdWRHVnNVMGRZVW05dmRFTkJMbU55YkRBZEJnTlZIUTRFRmdRVUltVU0xbHFkTkluemc3U1YKVXI5UUd6a25CcXd3RGdZRFZSMFBBUUgvQkFRREFnRUdNQklHQTFVZEV3RUIvd1FJTUFZQkFmOENBUUV3Q2dZSQpLb1pJemowRUF3SURTQUF3UlFJZ1FRcy8wOHJ5Y2RQYXVDRms4VVBRWENNQWxzbG9CZTdOd2FRR1RjZHBhMEVDCklRQ1V0OFNHdnhLbWpwY00vejBXUDlEdm84aDJrNWR1MWlXRGRCa0FuKzBpaUE9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCgA","runtimeData":{"data":"CiAgICAgICAgewogICAgICAgICAgICAiandrIiA6IHsKICAgICAgICAgICAgICAgICJrdHkiOiJFQyIsCiAgICAgICAgICAgICAgICAidXNlIjoic2lnIiwKICAgICAgICAgICAgICAgICJjcnYiOiJQLTI1NiIsCiAgICAgICAgICAgICAgICAieCI6IjE4d0hMZUlnVzl3Vk42VkQxVHhncHF5MkxzellrTWY2SjhualZBaWJ2aE0iLAogICAgICAgICAgICAgICAgInkiOiJjVjRkUzRVYUxNZ1BfNGZZNGo4aXI3Y2wxVFhsRmRBZ2N4NTVvN1RrY1NBIgogICAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIA","dataType":"Binary"}})
  .query(true)
  .reply(200, {"token":"eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vc2hhcmVkdWtzLnVrcy5hdHRlc3QuYXp1cmUubmV0L2NlcnRzIiwia2lkIjoiR2czNUlzOVAyYWpTS2ZDRXJjZmhqajFkbU5FMnF2Sy9XOTAvQWtwTE1LST0iLCJ0eXAiOiJKV1QifQ.eyJhYXMtZWhkIjoiQ2lBZ0lDQWdJQ0FnZXdvZ0lDQWdJQ0FnSUNBZ0lDQWlhbmRySWlBNklIc0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDSnJkSGtpT2lKRlF5SXNDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWlkWE5sSWpvaWMybG5JaXdLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0pqY25ZaU9pSlFMVEkxTmlJc0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBaWVDSTZJakU0ZDBoTVpVbG5WemwzVms0MlZrUXhWSGhuY0hGNU1reHplbGxyVFdZMlNqaHVhbFpCYVdKMmFFMGlMQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJbmtpT2lKalZqUmtVelJWWVV4TloxQmZOR1paTkdvNGFYSTNZMnd4VkZoc1JtUkJaMk40TlRWdk4xUnJZMU5CSWdvZ0lDQWdJQ0FnSUNBZ0lDQjlDaUFnSUNBZ0lDQWdmUW9nSUNBZ0lDQWdJQSIsImV4cCI6MTYyMjAxNjA3MywiaWF0IjoxNjIxOTg3MjczLCJpcy1kZWJ1Z2dhYmxlIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9zaGFyZWR1a3MudWtzLmF0dGVzdC5henVyZS5uZXQiLCJqdGkiOiJlYjhkZWZmZTdmM2RhMjc1MzhlYTdhY2U3MDQ3OWZjODI4ODI4MmNhNWU2Mzk0Y2ZmMTE2NDg4YTY5ZjEyMTBlIiwibWFhLWF0dGVzdGF0aW9uY29sbGF0ZXJhbCI6eyJxZWlkY2VydHNoYXNoIjoiMWIyYTdjZDU5NjY5MjlhZWMxZTA2MWY0N2FiYTAzYWU0MjJjMTFlOWY4ZGNlNDIxMmMyYmIzNjA5MjIyZjMyNCIsInFlaWRjcmxoYXNoIjoiMDU5NzYyZTcyNmU4MDM3YTFkZjViYTUxMzZhNDM0NTdmYTIyODNhMzhmNWZjMjcxNGUyOWFhZmI2NDU1NDEzOCIsInFlaWRoYXNoIjoiNDJhMjQ4ZGMwZGU4NWE0ODY2MjYwYTQ2MjMxNGQzZWQ5NTUxYjZhZDE1M2I1NjM1NTYyYmM5YWFkMWE5MWY4NyIsInF1b3RlaGFzaCI6ImFmMGUwNTYzMWMxNDVkN2RjMWEzM2IyMTRkNDNjNmFhMzRhNzg1OTYyMmEwYWM3ZDg4MGFiN2IyNGUyZjE4ZDIiLCJ0Y2JpbmZvY2VydHNoYXNoIjoiMWIyYTdjZDU5NjY5MjlhZWMxZTA2MWY0N2FiYTAzYWU0MjJjMTFlOWY4ZGNlNDIxMmMyYmIzNjA5MjIyZjMyNCIsInRjYmluZm9jcmxoYXNoIjoiMDU5NzYyZTcyNmU4MDM3YTFkZjViYTUxMzZhNDM0NTdmYTIyODNhMzhmNWZjMjcxNGUyOWFhZmI2NDU1NDEzOCIsInRjYmluZm9oYXNoIjoiOTBjOGM3MTRkNDM3MTU4MzlmZWUzZDAyNGRmMTQ4ZWZlNzA2OWZkZTRlMDIxNmI1Njg2YWNmZjdkNDRiY2Y3MSJ9LCJtYWEtZWhkIjoiQ2lBZ0lDQWdJQ0FnZXdvZ0lDQWdJQ0FnSUNBZ0lDQWlhbmRySWlBNklIc0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDSnJkSGtpT2lKRlF5SXNDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWlkWE5sSWpvaWMybG5JaXdLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0pqY25ZaU9pSlFMVEkxTmlJc0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBaWVDSTZJakU0ZDBoTVpVbG5WemwzVms0MlZrUXhWSGhuY0hGNU1reHplbGxyVFdZMlNqaHVhbFpCYVdKMmFFMGlMQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJbmtpT2lKalZqUmtVelJWWVV4TloxQmZOR1paTkdvNGFYSTNZMnd4VkZoc1JtUkJaMk40TlRWdk4xUnJZMU5CSWdvZ0lDQWdJQ0FnSUNBZ0lDQjlDaUFnSUNBZ0lDQWdmUW9nSUNBZ0lDQWdJQSIsIm5iZiI6MTYyMTk4NzI3MywicHJvZHVjdC1pZCI6MSwic2d4LW1yZW5jbGF2ZSI6ImI3NzkyMDI2MThiZWNiNjM2NzY4ZTVkOTAyZjI4ZDUyNDIyMjczNWZhZmI1MzllYTliYTA3YzNmYzE3MWExYzIiLCJzZ3gtbXJzaWduZXIiOiIyYzFhNDQ5NTJhZTgyMDcxMzVjNmMyOWI3NWI4YzAyOTM3MmVlOTRiNjc3ZTE1YzIwYmQ0MjM0MGYxMGQ0MWFhIiwic3ZuIjoxLCJ0ZWUiOiJzZ3giLCJ4LW1zLWF0dGVzdGF0aW9uLXR5cGUiOiJzZ3giLCJ4LW1zLXBvbGljeS1oYXNoIjoiYlJPck44OTdaZldtV1kyVjBGTFVsdTN1d2s1eGF0R25LWUhuM3pCYlNsdyIsIngtbXMtc2d4LWNvbGxhdGVyYWwiOnsicWVpZGNlcnRzaGFzaCI6IjFiMmE3Y2Q1OTY2OTI5YWVjMWUwNjFmNDdhYmEwM2FlNDIyYzExZTlmOGRjZTQyMTJjMmJiMzYwOTIyMmYzMjQiLCJxZWlkY3JsaGFzaCI6IjA1OTc2MmU3MjZlODAzN2ExZGY1YmE1MTM2YTQzNDU3ZmEyMjgzYTM4ZjVmYzI3MTRlMjlhYWZiNjQ1NTQxMzgiLCJxZWlkaGFzaCI6IjQyYTI0OGRjMGRlODVhNDg2NjI2MGE0NjIzMTRkM2VkOTU1MWI2YWQxNTNiNTYzNTU2MmJjOWFhZDFhOTFmODciLCJxdW90ZWhhc2giOiJhZjBlMDU2MzFjMTQ1ZDdkYzFhMzNiMjE0ZDQzYzZhYTM0YTc4NTk2MjJhMGFjN2Q4ODBhYjdiMjRlMmYxOGQyIiwidGNiaW5mb2NlcnRzaGFzaCI6IjFiMmE3Y2Q1OTY2OTI5YWVjMWUwNjFmNDdhYmEwM2FlNDIyYzExZTlmOGRjZTQyMTJjMmJiMzYwOTIyMmYzMjQiLCJ0Y2JpbmZvY3JsaGFzaCI6IjA1OTc2MmU3MjZlODAzN2ExZGY1YmE1MTM2YTQzNDU3ZmEyMjgzYTM4ZjVmYzI3MTRlMjlhYWZiNjQ1NTQxMzgiLCJ0Y2JpbmZvaGFzaCI6IjkwYzhjNzE0ZDQzNzE1ODM5ZmVlM2QwMjRkZjE0OGVmZTcwNjlmZGU0ZTAyMTZiNTY4NmFjZmY3ZDQ0YmNmNzEifSwieC1tcy1zZ3gtZWhkIjoiQ2lBZ0lDQWdJQ0FnZXdvZ0lDQWdJQ0FnSUNBZ0lDQWlhbmRySWlBNklIc0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDSnJkSGtpT2lKRlF5SXNDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWlkWE5sSWpvaWMybG5JaXdLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0pqY25ZaU9pSlFMVEkxTmlJc0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBaWVDSTZJakU0ZDBoTVpVbG5WemwzVms0MlZrUXhWSGhuY0hGNU1reHplbGxyVFdZMlNqaHVhbFpCYVdKMmFFMGlMQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJbmtpT2lKalZqUmtVelJWWVV4TloxQmZOR1paTkdvNGFYSTNZMnd4VkZoc1JtUkJaMk40TlRWdk4xUnJZMU5CSWdvZ0lDQWdJQ0FnSUNBZ0lDQjlDaUFnSUNBZ0lDQWdmUW9nSUNBZ0lDQWdJQSIsIngtbXMtc2d4LWlzLWRlYnVnZ2FibGUiOmZhbHNlLCJ4LW1zLXNneC1tcmVuY2xhdmUiOiJiNzc5MjAyNjE4YmVjYjYzNjc2OGU1ZDkwMmYyOGQ1MjQyMjI3MzVmYWZiNTM5ZWE5YmEwN2MzZmMxNzFhMWMyIiwieC1tcy1zZ3gtbXJzaWduZXIiOiIyYzFhNDQ5NTJhZTgyMDcxMzVjNmMyOWI3NWI4YzAyOTM3MmVlOTRiNjc3ZTE1YzIwYmQ0MjM0MGYxMGQ0MWFhIiwieC1tcy1zZ3gtcHJvZHVjdC1pZCI6MSwieC1tcy1zZ3gtcmVwb3J0LWRhdGEiOiJlZDExYTllYjk3ZGZjMTcwNTNhMzJhNjk5MmU3MWQwNGY3ZWM5OTZlNDU1MTlhYjcxMDkzNmFmYjQ4ZjkwNDFkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsIngtbXMtc2d4LXN2biI6MSwieC1tcy12ZXIiOiIxLjAifQ.AxXgaJZ-PQXy3QejrH2HJSduubluPnrMFFiKqwPb4BHeDa4AzPRvBFIPMsFxKJeHeEFqI7N0IiKB9rARxxotTcMmPs_TJzWzm30PGWtscswD29ttN8iMYvcjoLJk3Zwf92vl-mMHV69ifs2wpJ4LXSfwrdncanWw5-S6m8Mg5wlFG_mZGN3Q9ccWi4vzqFZrCmyOhAV38SqguIoI-rTv1Pw5FllMDYtlFm1h9S1GK6_O8xQItXhjuiqLYP8Rgb-jYi81tk46_vsaPLz0pVgXQdnhssIKj-dZ7xk5j6jIwuoehI8aq4D71RaOMPTpU0G6ggjpheHfqf-0X-aVdZKl_A"}, [
  'Connection',
  'close',
  'Date',
  'Wed, 26 May 2021 00:01:13 GMT',
  'Content-Type',
  'application/json; charset=utf-8',
  'Server',
  'Kestrel',
  'Content-Length',
  '4928',
  'x-ms-request-id',
  '00-007fb467af8f123418417cdad512c031-0000000000000000-00',
  'x-ms-maa-service-version',
  '1.10.01598.0001'
]);

nock('https://shareduks.uks.attest.azure.net:443', {"encodedQueryParams":true})
  .get('/certs')
  .reply(200, {"keys":[{"x5c":["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RU52Y25CdmNtRjBhVzl1TVJRd0VnWURWUVFIREF0VFlXNTBZU0JEYkdGeVlURUxNQWtHQTFVRQpDQXdDUTBFeEN6QUpCZ05WQkFZVEFsVlRNQjRYRFRJeE1ESXhPREF5TXpVek5Gb1hEVEk0TURJeE9EQXlNelV6Ck5Gb3djREVpTUNBR0ExVUVBd3daU1c1MFpXd2dVMGRZSUZCRFN5QkRaWEowYVdacFkyRjBaVEVhTUJnR0ExVUUKQ2d3UlNXNTBaV3dnUTI5eWNHOXlZWFJwYjI0eEZEQVNCZ05WQkFjTUMxTmhiblJoSUVOc1lYSmhNUXN3Q1FZRApWUVFJREFKRFFURUxNQWtHQTFVRUJoTUNWVk13V1RBVEJnY3Foa2pPUFFJQkJnZ3Foa2pPUFFNQkJ3TkNBQVNoCkFhaC9idm8xdDlWa2RyRXRmNTZ1RGh2YTZNYld3aExhOGh2MjdvcW5oanQvTTByVW1jWThtU0tYTU1tK0gzTE4KNGZTSmNsYmNmVW8vTUdoV3o5RkdvNElDbXpDQ0FwY3dId1lEVlIwakJCZ3dGb0FVME9pcTJuWFgrUzVKRjVnOApleFJsME5YeVdVMHdYd1lEVlIwZkJGZ3dWakJVb0ZLZ1VJWk9hSFIwY0hNNkx5OWhjR2t1ZEhKMWMzUmxaSE5sCmNuWnBZMlZ6TG1sdWRHVnNMbU52YlM5elozZ3ZZMlZ5ZEdsbWFXTmhkR2x2Ymk5Mk1pOXdZMnRqY213L1kyRTkKY0hKdlkyVnpjMjl5TUIwR0ExVWREZ1FXQkJRRkpyR0pRcTc0UWlDN3FkTUJlUXhIb3hvdW5qQU9CZ05WSFE4QgpBZjhFQkFNQ0JzQXdEQVlEVlIwVEFRSC9CQUl3QURDQ0FkUUdDU3FHU0liNFRRRU5BUVNDQWNVd2dnSEJNQjRHCkNpcUdTSWI0VFFFTkFRRUVFRkFxdHlIdTU5VUlIUENEc3I3aGpyUXdnZ0ZrQmdvcWhraUcrRTBCRFFFQ01JSUIKVkRBUUJnc3Foa2lHK0UwQkRRRUNBUUlCRVRBUUJnc3Foa2lHK0UwQkRRRUNBZ0lCRVRBUUJnc3Foa2lHK0UwQgpEUUVDQXdJQkFqQVFCZ3NxaGtpRytFMEJEUUVDQkFJQkJEQVFCZ3NxaGtpRytFMEJEUUVDQlFJQkFUQVJCZ3NxCmhraUcrRTBCRFFFQ0JnSUNBSUF3RUFZTEtvWklodmhOQVEwQkFnY0NBUVl3RUFZTEtvWklodmhOQVEwQkFnZ0MKQVFBd0VBWUxLb1pJaHZoTkFRMEJBZ2tDQVFBd0VBWUxLb1pJaHZoTkFRMEJBZ29DQVFBd0VBWUxLb1pJaHZoTgpBUTBCQWdzQ0FRQXdFQVlMS29aSWh2aE5BUTBCQWd3Q0FRQXdFQVlMS29aSWh2aE5BUTBCQWcwQ0FRQXdFQVlMCktvWklodmhOQVEwQkFnNENBUUF3RUFZTEtvWklodmhOQVEwQkFnOENBUUF3RUFZTEtvWklodmhOQVEwQkFoQUMKQVFBd0VBWUxLb1pJaHZoTkFRMEJBaEVDQVFvd0h3WUxLb1pJaHZoTkFRMEJBaElFRUJFUkFnUUJnQVlBQUFBQQpBQUFBQUFBd0VBWUtLb1pJaHZoTkFRMEJBd1FDQUFBd0ZBWUtLb1pJaHZoTkFRMEJCQVFHQUpCdTFRQUFNQThHCkNpcUdTSWI0VFFFTkFRVUtBUUF3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUlnWk4wYTloc0VZeEpvZi94SGJYa2oKYkhQRUpCU3lIdGpwT2RXaWw4dGRHbDRDSVFEcWlkd0ZobjNSVkNsK3RiTWRFSDNLQm9aeTNLbnhQdXZkbzBSTgpncGpJc0E9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCi0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLQpNSUlDbHpDQ0FqNmdBd0lCQWdJVkFORG9xdHAxMS9rdVNSZVlQSHNVWmREVjhsbE5NQW9HQ0NxR1NNNDlCQU1DCk1HZ3hHakFZQmdOVkJBTU1FVWx1ZEdWc0lGTkhXQ0JTYjI5MElFTkJNUm93R0FZRFZRUUtEQkZKYm5SbGJDQkQKYjNKd2IzSmhkR2x2YmpFVU1CSUdBMVVFQnd3TFUyRnVkR0VnUTJ4aGNtRXhDekFKQmdOVkJBZ01Ba05CTVFzdwpDUVlEVlFRR0V3SlZVekFlRncweE9EQTFNakV4TURRMU1EaGFGdzB6TXpBMU1qRXhNRFExTURoYU1IRXhJekFoCkJnTlZCQU1NR2tsdWRHVnNJRk5IV0NCUVEwc2dVSEp2WTJWemMyOXlJRU5CTVJvd0dBWURWUVFLREJGSmJuUmwKYkNCRGIzSndiM0poZEdsdmJqRVVNQklHQTFVRUJ3d0xVMkZ1ZEdFZ1EyeGhjbUV4Q3pBSkJnTlZCQWdNQWtOQgpNUXN3Q1FZRFZRUUdFd0pWVXpCWk1CTUdCeXFHU000OUFnRUdDQ3FHU000OUF3RUhBMElBQkw5cStOTXAySU9nCnRkbDFiay91V1o1K1RHUW04YUNpOHo3OGZzK2ZLQ1EzZCt1RHpYblZUQVQyWmhEQ2lmeUl1Snd2TjN3TkJwOWkKSEJTU01KTUpyQk9qZ2Jzd2diZ3dId1lEVlIwakJCZ3dGb0FVSW1VTTFscWROSW56ZzdTVlVyOVFHemtuQnF3dwpVZ1lEVlIwZkJFc3dTVEJIb0VXZ1E0WkJhSFIwY0hNNkx5OWpaWEowYVdacFkyRjBaWE11ZEhKMWMzUmxaSE5sCmNuWnBZMlZ6TG1sdWRHVnNMbU52YlM5SmJuUmxiRk5IV0ZKdmIzUkRRUzVqY213d0hRWURWUjBPQkJZRUZORG8KcXRwMTEva3VTUmVZUEhzVVpkRFY4bGxOTUE0R0ExVWREd0VCL3dRRUF3SUJCakFTQmdOVkhSTUJBZjhFQ0RBRwpBUUgvQWdFQU1Bb0dDQ3FHU000OUJBTUNBMGNBTUVRQ0lDLzlqKzg0VCtIenRWTy9zT1FCV0piU2QrLzJ1ZXhLCjQrYUEwamNGQkxjcEFpQTNkaE1yRjVjRDUydDZGcU12QUlwajhYZEdteTJiZWVsakxKSytwenBjUkE9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCi0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLQpNSUlDampDQ0FqU2dBd0lCQWdJVUltVU0xbHFkTkluemc3U1ZVcjlRR3prbkJxd3dDZ1lJS29aSXpqMEVBd0l3CmFERWFNQmdHQTFVRUF3d1JTVzUwWld3Z1UwZFlJRkp2YjNRZ1EwRXhHakFZQmdOVkJBb01FVWx1ZEdWc0lFTnYKY25CdmNtRjBhVzl1TVJRd0VnWURWUVFIREF0VFlXNTBZU0JEYkdGeVlURUxNQWtHQTFVRUNBd0NRMEV4Q3pBSgpCZ05WQkFZVEFsVlRNQjRYRFRFNE1EVXlNVEV3TkRFeE1Wb1hEVE16TURVeU1URXdOREV4TUZvd2FERWFNQmdHCkExVUVBd3dSU1c1MFpXd2dVMGRZSUZKdmIzUWdRMEV4R2pBWUJnTlZCQW9NRVVsdWRHVnNJRU52Y25CdmNtRjAKYVc5dU1SUXdFZ1lEVlFRSERBdFRZVzUwWVNCRGJHRnlZVEVMTUFrR0ExVUVDQXdDUTBFeEN6QUpCZ05WQkFZVApBbFZUTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFQzZuRXdNRElZWk9qL2lQV3NDemFFS2k3CjFPaU9TTFJGaFdHamJuQlZKZlZua1k0dTNJamtEWVlMME14TzRtcXN5WWpsQmFsVFZZeEZQMnNKQks1emxLT0IKdXpDQnVEQWZCZ05WSFNNRUdEQVdnQlFpWlF6V1dwMDBpZk9EdEpWU3YxQWJPU2NHckRCU0JnTlZIUjhFU3pCSgpNRWVnUmFCRGhrRm9kSFJ3Y3pvdkwyTmxjblJwWm1sallYUmxjeTUwY25WemRHVmtjMlZ5ZG1salpYTXVhVzUwClpXd3VZMjl0TDBsdWRHVnNVMGRZVW05dmRFTkJMbU55YkRBZEJnTlZIUTRFRmdRVUltVU0xbHFkTkluemc3U1YKVXI5UUd6a25CcXd3RGdZRFZSMFBBUUgvQkFRREFnRUdNQklHQTFVZEV3RUIvd1FJTUFZQkFmOENBUUV3Q2dZSQpLb1pJemowRUF3SURTQUF3UlFJZ1FRcy8wOHJ5Y2RQYXVDRms4VVBRWENNQWxzbG9CZTdOd2FRR1RjZHBhMEVDCklRQ1V0OFNHdnhLbWpwY00vejBXUDlEdm84aDJrNWR1MWlXRGRCa0FuKzBpaUE9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCgAwDQYJKoZIhvcNAQELBQADggEBADS/Oi0xUlZwpvgbWo32DwgPNe57E9oH6SvfKF52b3tgbLnhLiX8/w1/2nzg4wVIlOXlegC+QyfDGtORC3rLYLWG164V6oq/RITH0sDbknyU1KJ3p6WkeBmc15Ct9B6r8rbSUEEH8l0LUQVWHzOPpwv7gq8lvw8sta206u6QLhhGFFksFFFTL6tbsEjMOD2NpnR4wsCCGK74iL5ST+XcBM67kg8l/oLj41X4DSqzYngOSVjrVkltKzpbYEPMGbs01mh5Q0VJV8QqoHI/rSD65QwLJDWO1qP/7sYccEsHWt7PpuzZXUvvVeme427VF8qBZPy6ZmkUr+HICIDZmGFEsec="],"kid":"Gg35Is9P2ajSKfCErcfhjj1dmNE2qvK/W90/AkpLMKI=","kty":"RSA"},{"x5c":["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R0ExVUVBd3daU1c1MFpXd2dVMGRZSUZCRFN5QkRaWEowYVdacFkyRjBaVEVhTUJnR0ExVUUKQ2d3UlNXNTBaV3dnUTI5eWNHOXlZWFJwYjI0eEZEQVNCZ05WQkFjTUMxTmhiblJoSUVOc1lYSmhNUXN3Q1FZRApWUVFJREFKRFFURUxNQWtHQTFVRUJoTUNWVk13V1RBVEJnY3Foa2pPUFFJQkJnZ3Foa2pPUFFNQkJ3TkNBQVNoCkFhaC9idm8xdDlWa2RyRXRmNTZ1RGh2YTZNYld3aExhOGh2MjdvcW5oanQvTTByVW1jWThtU0tYTU1tK0gzTE4KNGZTSmNsYmNmVW8vTUdoV3o5RkdvNElDbXpDQ0FwY3dId1lEVlIwakJCZ3dGb0FVME9pcTJuWFgrUzVKRjVnOApleFJsME5YeVdVMHdYd1lEVlIwZkJGZ3dWakJVb0ZLZ1VJWk9hSFIwY0hNNkx5OWhjR2t1ZEhKMWMzUmxaSE5sCmNuWnBZMlZ6TG1sdWRHVnNMbU52YlM5elozZ3ZZMlZ5ZEdsbWFXTmhkR2x2Ymk5Mk1pOXdZMnRqY213L1kyRTkKY0hKdlkyVnpjMjl5TUIwR0ExVWREZ1FXQkJRRkpyR0pRcTc0UWlDN3FkTUJlUXhIb3hvdW5qQU9CZ05WSFE4QgpBZjhFQkFNQ0JzQXdEQVlEVlIwVEFRSC9CQUl3QURDQ0FkUUdDU3FHU0liNFRRRU5BUVNDQWNVd2dnSEJNQjRHCkNpcUdTSWI0VFFFTkFRRUVFRkFxdHlIdTU5VUlIUENEc3I3aGpyUXdnZ0ZrQmdvcWhraUcrRTBCRFFFQ01JSUIKVkRBUUJnc3Foa2lHK0UwQkRRRUNBUUlCRVRBUUJnc3Foa2lHK0UwQkRRRUNBZ0lCRVRBUUJnc3Foa2lHK0UwQgpEUUVDQXdJQkFqQVFCZ3NxaGtpRytFMEJEUUVDQkFJQkJEQVFCZ3NxaGtpRytFMEJEUUVDQlFJQkFUQVJCZ3NxCmhraUcrRTBCRFFFQ0JnSUNBSUF3RUFZTEtvWklodmhOQVEwQkFnY0NBUVl3RUFZTEtvWklodmhOQVEwQkFnZ0MKQVFBd0VBWUxLb1pJaHZoTkFRMEJBZ2tDQVFBd0VBWUxLb1pJaHZoTkFRMEJBZ29DQVFBd0VBWUxLb1pJaHZoTgpBUTBCQWdzQ0FRQXdFQVlMS29aSWh2aE5BUTBCQWd3Q0FRQXdFQVlMS29aSWh2aE5BUTBCQWcwQ0FRQXdFQVlMCktvWklodmhOQVEwQkFnNENBUUF3RUFZTEtvWklodmhOQVEwQkFnOENBUUF3RUFZTEtvWklodmhOQVEwQkFoQUMKQVFBd0VBWUxLb1pJaHZoTkFRMEJBaEVDQVFvd0h3WUxLb1pJaHZoTkFRMEJBaElFRUJFUkFnUUJnQVlBQUFBQQpBQUFBQUFBd0VBWUtLb1pJaHZoTkFRMEJBd1FDQUFBd0ZBWUtLb1pJaHZoTkFRMEJCQVFHQUpCdTFRQUFNQThHCkNpcUdTSWI0VFFFTkFRVUtBUUF3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUlnWk4wYTloc0VZeEpvZi94SGJYa2oKYkhQRUpCU3lIdGpwT2RXaWw4dGRHbDRDSVFEcWlkd0ZobjNSVkNsK3RiTWRFSDNLQm9aeTNLbnhQdXZkbzBSTgpncGpJc0E9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCi0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLQpNSUlDbHpDQ0FqNmdBd0lCQWdJVkFORG9xdHAxMS9rdVNSZVlQSHNVWmREVjhsbE5NQW9HQ0NxR1NNNDlCQU1DCk1HZ3hHakFZQmdOVkJBTU1FVWx1ZEdWc0lGTkhXQ0JTYjI5MElFTkJNUm93R0FZRFZRUUtEQkZKYm5SbGJDQkQKYjNKd2IzSmhkR2x2YmpFVU1CSUdBMVVFQnd3TFUyRnVkR0VnUTJ4aGNtRXhDekFKQmdOVkJBZ01Ba05CTVFzdwpDUVlEVlFRR0V3SlZVekFlRncweE9EQTFNakV4TURRMU1EaGFGdzB6TXpBMU1qRXhNRFExTURoYU1IRXhJekFoCkJnTlZCQU1NR2tsdWRHVnNJRk5IV0NCUVEwc2dVSEp2WTJWemMyOXlJRU5CTVJvd0dBWURWUVFLREJGSmJuUmwKYkNCRGIzSndiM0poZEdsdmJqRVVNQklHQTFVRUJ3d0xVMkZ1ZEdFZ1EyeGhjbUV4Q3pBSkJnTlZCQWdNQWtOQgpNUXN3Q1FZRFZRUUdFd0pWVXpCWk1CTUdCeXFHU000OUFnRUdDQ3FHU000OUF3RUhBMElBQkw5cStOTXAySU9nCnRkbDFiay91V1o1K1RHUW04YUNpOHo3OGZzK2ZLQ1EzZCt1RHpYblZUQVQyWmhEQ2lmeUl1Snd2TjN3TkJwOWkKSEJTU01KTUpyQk9qZ2Jzd2diZ3dId1lEVlIwakJCZ3dGb0FVSW1VTTFscWROSW56ZzdTVlVyOVFHemtuQnF3dwpVZ1lEVlIwZkJFc3dTVEJIb0VXZ1E0WkJhSFIwY0hNNkx5OWpaWEowYVdacFkyRjBaWE11ZEhKMWMzUmxaSE5sCmNuWnBZMlZ6TG1sdWRHVnNMbU52YlM5SmJuUmxiRk5IV0ZKdmIzUkRRUzVqY213d0hRWURWUjBPQkJZRUZORG8KcXRwMTEva3VTUmVZUEhzVVpkRFY4bGxOTUE0R0ExVWREd0VCL3dRRUF3SUJCakFTQmdOVkhSTUJBZjhFQ0RBRwpBUUgvQWdFQU1Bb0dDQ3FHU000OUJBTUNBMGNBTUVRQ0lDLzlqKzg0VCtIenRWTy9zT1FCV0piU2QrLzJ1ZXhLCjQrYUEwamNGQkxjcEFpQTNkaE1yRjVjRDUydDZGcU12QUlwajhYZEdteTJiZWVsakxKSytwenBjUkE9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCi0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLQpNSUlDampDQ0FqU2dBd0lCQWdJVUltVU0xbHFkTkluemc3U1ZVcjlRR3prbkJxd3dDZ1lJS29aSXpqMEVBd0l3CmFERWFNQmdHQTFVRUF3d1JTVzUwWld3Z1UwZFlJRkp2YjNRZ1EwRXhHakFZQmdOVkJBb01FVWx1ZEdWc0lFTnYKY25CdmNtRjBhVzl1TVJRd0VnWURWUVFIREF0VFlXNTBZU0JEYkdGeVlURUxNQWtHQTFVRUNBd0NRMEV4Q3pBSgpCZ05WQkFZVEFsVlRNQjRYRFRFNE1EVXlNVEV3TkRFeE1Wb1hEVE16TURVeU1URXdOREV4TUZvd2FERWFNQmdHCkExVUVBd3dSU1c1MFpXd2dVMGRZSUZKdmIzUWdRMEV4R2pBWUJnTlZCQW9NRVVsdWRHVnNJRU52Y25CdmNtRjAKYVc5dU1SUXdFZ1lEVlFRSERBdFRZVzUwWVNCRGJHRnlZVEVMTUFrR0ExVUVDQXdDUTBFeEN6QUpCZ05WQkFZVApBbFZUTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFQzZuRXdNRElZWk9qL2lQV3NDemFFS2k3CjFPaU9TTFJGaFdHamJuQlZKZlZua1k0dTNJamtEWVlMME14TzRtcXN5WWpsQmFsVFZZeEZQMnNKQks1emxLT0IKdXpDQnVEQWZCZ05WSFNNRUdEQVdnQlFpWlF6V1dwMDBpZk9EdEpWU3YxQWJPU2NHckRCU0JnTlZIUjhFU3pCSgpNRWVnUmFCRGhrRm9kSFJ3Y3pvdkwyTmxjblJwWm1sallYUmxjeTUwY25WemRHVmtjMlZ5ZG1salpYTXVhVzUwClpXd3VZMjl0TDBsdWRHVnNVMGRZVW05dmRFTkJMbU55YkRBZEJnTlZIUTRFRmdRVUltVU0xbHFkTkluemc3U1YKVXI5UUd6a25CcXd3RGdZRFZSMFBBUUgvQkFRREFnRUdNQklHQTFVZEV3RUIvd1FJTUFZQkFmOENBUUV3Q2dZSQpLb1pJemowRUF3SURTQUF3UlFJZ1FRcy8wOHJ5Y2RQYXVDRms4VVBRWENNQWxzbG9CZTdOd2FRR1RjZHBhMEVDCklRQ1V0OFNHdnhLbWpwY00vejBXUDlEdm84aDJrNWR1MWlXRGRCa0FuKzBpaUE9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCgAwDQYJKoZIhvcNAQELBQADgYEAdziMl6xTHeblk7nGaXmXibB29RaujRyHiWdOFmYdA42q1pvcghYyg63j+KR2SdSmvLhpw9leU4lLWUhG7HBPkvKH1+KJ4uQPRH0R9WBypa4mz3qD/M17zeX40nL36ew4U+8PGp4/luUIS65rsWcl6SImMuyx99g7KT162lOl7Zs="],"kid":"7O0yBbj48oMPKpBcshFxYo2TZeo/naWA6HrguQEwoUM=","kty":"RSA"}]}, [
  'Connection',
  'close',
  'Date',
  'Wed, 26 May 2021 00:01:13 GMT',
  'Content-Type',
  'application/json; charset=utf-8',
  'Server',
  'Kestrel',
  'Content-Length',
  '14330',
  'x-ms-request-id',
  '00-ba679933c69834a38c7b288f7903cd5b-0000000000000000-00',
  'x-ms-maa-service-version',
  '1.10.01598.0001'
]);