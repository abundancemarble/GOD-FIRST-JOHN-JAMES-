Param(
#   [Parameter]
   [string]$filePath
)

#$filePath = "C:\PowerShellScripts\rezidor.xml"
[XML]$myXML= Get-Content $filePath

#Old school loop
$n=0
$nCount = $myXML.LyncOnlineAcpUsers.ACPUser.Username.Count 

while ($n -le $nCount-1)
{
$User = $myXML.LyncOnlineAcpUsers.ACPUser.Username[$n] #email to identify user in Lync Online
$Provider = $myXML.LyncOnlineAcpUsers.ACPUser.UserAudioConferencingInfo.Provider.Identity[$n] #ACP Provider name
$Passcode = $myXML.LyncOnlineAcpUsers.ACPUser.UserAudioConferencingInfo.Passcode[$n]
$TollNumber = $myXML.LyncOnlineAcpUsers.ACPUser.UserAudioConferencingInfo.TollNumber[$n]
$TollFreeNumber = $myXML.LyncOnlineAcpUsers.ACPUser.UserAudioConferencingInfo.TollFreeNumber[$n]

##Insert your LyncOnline management here
Write-Debug -Message $User


$n++ #Inc loop counter
} #end while


foreach ($user in $myXML.LyncOnlineAcpUsers.ACPUser.Username)
{

}
